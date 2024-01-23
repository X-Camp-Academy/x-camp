import React, {useEffect, useRef, useState} from "react";
import {Button, notification} from 'antd'

enum LangType {
  'zh_CN' = 'zh_CN',
  'en_US' = 'en_US'
}

const notifyLocaleMap: {
  [key in LangType]: any
} = {
  [LangType.en_US]: {
    title: '📢 system update',
    description: 'System update, please refresh the page',
    buttonText: 'refresh',
    dismissButtonText: 'dismiss',
  },
  [LangType.zh_CN]: {
    title: '📢 发现新版本',
    description: '网页更新了！请刷新页面后使用。',
    buttonText: '刷新',
    dismissButtonText: '忽略',
  },
}

const VERSION_KEY = 'local-version'

const getLocalVersion = (): string => {
  const res = window.localStorage.getItem(VERSION_KEY)
  return res ? JSON.parse(res) : ''
}

const setVersion = (version: any) => {
  return window.localStorage.setItem(VERSION_KEY, JSON.stringify(version))
}

export const useWebUpdateNotify = () => {
  const [lang, setLang] = useState<'zh_CN' | 'en_US'>(LangType.zh_CN)
  const [api, contextHolder] = notification.useNotification();
  const [notifyVisible, setNotifyVisible] = useState(false)

  const timer = useRef<any>()

  const openNotification = () => {
    api.open({
      message: notifyLocaleMap[lang].title,
      closeIcon: false,
      duration: null,
      style: {
        width: 280,
        padding: "8px 16px",
        lineHeight: "1.6"
      },
      description: <div>
        <div>{notifyLocaleMap[lang].description}</div>
        <div style={{textAlign: 'right'}}>
          <Button style={{color: "rgba(0, 0, 0, 0.25)"}} onClick={() => {
            setNotifyVisible(false)
            api.destroy()
          }} type={"link"}>{notifyLocaleMap[lang].dismissButtonText}</Button>
          <Button type={"link"} onClick={() => {
            setNotifyVisible(false)
            window.location.reload()
          }}>{notifyLocaleMap[lang].buttonText}</Button>
        </div>
      </div>,
    });
  };

  const checkUpdate = async () => {
    const localVersion = getLocalVersion()
    console.log(localVersion, 'before')
    fetch(`/version.json?t=${+new Date()}`).then(res => {
      return res.json()
    }).then(({version}) => {
      console.log('fetched', localVersion, version, localVersion === version)
      if (version && version !== localVersion) {
        setVersion(version)
        localVersion && notify()
      }
    }).catch(err => console.warn(err, '----version.json error----'))
  }

  const pollingCheck = () => {
    timer.current = setInterval(checkUpdate, 10 * 6 * 10 * 1000)
  }

  const notify = () => {
    if (document.querySelector('.ant-notification')) {
      return
    }
    setNotifyVisible((oldVal) => {
      if (!oldVal) {
        openNotification()
      }
      return true
    })
  }
  const RegisterEventListeners = () => {
    window.addEventListener('focus', checkUpdate)
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        pollingCheck()
        checkUpdate()
      }
      if (document.visibilityState === 'hidden') {
        timer.current && clearInterval(timer.current)
      }
    })
    window.addEventListener(
      'error',
      (err) => {
        const errTagName = (err?.target as any)?.tagName
        if (errTagName === 'SCRIPT')
          checkUpdate()
      },
      true,
    )
  }

  const removeEventListeners = () => {
    window.removeEventListener('focus', checkUpdate)
  }

  useEffect(() => {
    if (window) {
      RegisterEventListeners()
      pollingCheck()
    }

    return () => {
      removeEventListeners()
    }
  }, [])

  return {
    setLocale: setLang,
    contextHolder,
    checkUpdate
  }
}
