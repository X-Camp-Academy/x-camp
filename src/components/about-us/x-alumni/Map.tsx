"use client";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import { Typography, Segmented } from "antd";
import * as echarts from "echarts";
import worldJson from "./world.json";
import usaJson from "./usa.json";
import styles from "./Map.module.scss";
import { SegmentedValue } from "antd/es/segmented";
import { useGetAboutUsAlumniMap } from "@/apis/strapi-client/strapi";

const { Title, Text } = Typography;

const Map: React.FC = () => {
  const { data } = useGetAboutUsAlumniMap();
  const [current, setCurrent] = useState<SegmentedValue>("World");
  const worldDOM = useRef<HTMLDivElement>();
  const usaDOM = useRef<HTMLDivElement>();
  console.log(data);
  
  useEffect(() => {
    if (worldDOM.current) {
      const mapChart = echarts.init(worldDOM.current);

      echarts.registerMap("world", JSON.stringify(worldJson));

      const options = {
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: "right",
          min: 0,
          max: 1000,
          inRange: {
            color: ["#D46B14", "#FFAD11", "#FFD600"],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        series: [
          {
            name: "校友人数",
            type: "map",
            mapType: "world",
            roam: true,
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              {
                name: "Afghanistan",
                value: 111,
              },
              {
                name: "Angola",
                value: 205,
              },
              {
                name: "Albania",
                value: 3150.143,
              },
              {
                name: "United Arab Emirates",
                value: 8441.537,
              },
              {
                name: "Argentina",
                value: 40374.224,
              },
              {
                name: "Armenia",
                value: 2963.496,
              },
              {
                name: "French Southern and Antarctic Lands",
                value: 268.065,
              },
              {
                name: "Australia",
                value: 22404.488,
              },
              {
                name: "Austria",
                value: 8401.924,
              },
              {
                name: "Azerbaijan",
                value: 9094.718,
              },
              {
                name: "Burundi",
                value: 9232.753,
              },
              {
                name: "Belgium",
                value: 10941.288,
              },
              {
                name: "Benin",
                value: 9509.798,
              },
              {
                name: "Burkina Faso",
                value: 15540.284,
              },
              {
                name: "Bangladesh",
                value: 151125.475,
              },
              {
                name: "Bulgaria",
                value: 7389.175,
              },
              {
                name: "The Bahamas",
                value: 66402.316,
              },
              {
                name: "Bosnia and Herzegovina",
                value: 3845.929,
              },
              {
                name: "Belarus",
                value: 9491.07,
              },
              {
                name: "Belize",
                value: 308.595,
              },
              {
                name: "Bermuda",
                value: 64.951,
              },
              {
                name: "Bolivia",
                value: 716.939,
              },
              {
                name: "Brazil",
                value: 195210.154,
              },
              {
                name: "Brunei",
                value: 27.223,
              },
              {
                name: "Bhutan",
                value: 716.939,
              },
              {
                name: "Botswana",
                value: 1969.341,
              },
              {
                name: "Central African Republic",
                value: 4349.921,
              },
              {
                name: "Canada",
                value: 34126.24,
              },
              {
                name: "Switzerland",
                value: 7830.534,
              },
              {
                name: "Chile",
                value: 17150.76,
              },
              {
                name: "China",
                value: 1359821.465,
              },
              {
                name: "Ivory Coast",
                value: 60508.978,
              },
              {
                name: "Cameroon",
                value: 20624.343,
              },
              {
                name: "Democratic Republic of the Congo",
                value: 62191.161,
              },
              {
                name: "Republic of the Congo",
                value: 3573.024,
              },
              {
                name: "Colombia",
                value: 46444.798,
              },
              {
                name: "Costa Rica",
                value: 4669.685,
              },
              {
                name: "Cuba",
                value: 11281.768,
              },
              {
                name: "Northern Cyprus",
                value: 1.468,
              },
              {
                name: "Cyprus",
                value: 1103.685,
              },
              {
                name: "Czech Republic",
                value: 10553.701,
              },
              {
                name: "Germany",
                value: 83017.404,
              },
              {
                name: "Djibouti",
                value: 834.036,
              },
              {
                name: "Denmark",
                value: 5550.959,
              },
              {
                name: "Dominican Republic",
                value: 10016.797,
              },
              {
                name: "Algeria",
                value: 37062.82,
              },
              {
                name: "Ecuador",
                value: 15001.072,
              },
              {
                name: "Egypt",
                value: 78075.705,
              },
              {
                name: "Eritrea",
                value: 5741.159,
              },
              {
                name: "Spain",
                value: 46182.038,
              },
              {
                name: "Estonia",
                value: 1298.533,
              },
              {
                name: "Ethiopia",
                value: 87095.281,
              },
              {
                name: "Finland",
                value: 5367.693,
              },
              {
                name: "Fiji",
                value: 860.559,
              },
              {
                name: "Falkland Islands",
                value: 49.581,
              },
              {
                name: "France",
                value: 63230.866,
              },
              {
                name: "Gabon",
                value: 1556.222,
              },
              {
                name: "United Kingdom",
                value: 62066.35,
              },
              {
                name: "Georgia",
                value: 4388.674,
              },
              {
                name: "Ghana",
                value: 24262.901,
              },
              {
                name: "Guinea",
                value: 10876.033,
              },
              {
                name: "Gambia",
                value: 1680.64,
              },
              {
                name: "Guinea Bissau",
                value: 10876.033,
              },
              {
                name: "Equatorial Guinea",
                value: 696.167,
              },
              {
                name: "Greece",
                value: 11109.999,
              },
              {
                name: "Greenland",
                value: 56.546,
              },
              {
                name: "Guatemala",
                value: 14341.576,
              },
              {
                name: "French Guiana",
                value: 231.169,
              },
              {
                name: "Guyana",
                value: 786.126,
              },
              {
                name: "Honduras",
                value: 7621.204,
              },
              {
                name: "Croatia",
                value: 4338.027,
              },
              {
                name: "Haiti",
                value: 9896.4,
              },
              {
                name: "Hungary",
                value: 10014.633,
              },
              {
                name: "Indonesia",
                value: 240676.485,
              },
              {
                name: "India",
                value: 12054.648,
              },
              {
                name: "Ireland",
                value: 4467.561,
              },
              {
                name: "Iran",
                value: 240676.485,
              },
              {
                name: "Iraq",
                value: 30962.38,
              },
              {
                name: "Iceland",
                value: 318.042,
              },
              {
                name: "Israel",
                value: 7420.368,
              },
              {
                name: "Italy",
                value: 60508.978,
              },
              {
                name: "Jamaica",
                value: 2741.485,
              },
              {
                name: "Jordan",
                value: 6454.554,
              },
              {
                name: "Japan",
                value: 127352.833,
              },
              {
                name: "Kazakhstan",
                value: 15921.127,
              },
              {
                name: "Kenya",
                value: 40909.194,
              },
              {
                name: "Kyrgyzstan",
                value: 5334.223,
              },
              {
                name: "Cambodia",
                value: 14364.931,
              },
              {
                name: "South Korea",
                value: 51452.352,
              },
              {
                name: "Kosovo",
                value: 97.743,
              },
              {
                name: "Kuwait",
                value: 2991.58,
              },
              {
                name: "Laos",
                value: 6395.713,
              },
              {
                name: "Lebanon",
                value: 4341.092,
              },
              {
                name: "Liberia",
                value: 3957.99,
              },
              {
                name: "Libya",
                value: 6040.612,
              },
              {
                name: "Sri Lanka",
                value: 20758.779,
              },
              {
                name: "Lesotho",
                value: 2008.921,
              },
              {
                name: "Lithuania",
                value: 3068.457,
              },
              {
                name: "Luxembourg",
                value: 507.885,
              },
              {
                name: "Latvia",
                value: 2090.519,
              },
              {
                name: "Morocco",
                value: 31642.36,
              },
              {
                name: "Moldova",
                value: 103.619,
              },
              {
                name: "Madagascar",
                value: 21079.532,
              },
              {
                name: "Mexico",
                value: 117886.404,
              },
              {
                name: "Macedonia",
                value: 507.885,
              },
              {
                name: "Mali",
                value: 13985.961,
              },
              {
                name: "Myanmar",
                value: 51931.231,
              },
              {
                name: "Montenegro",
                value: 620.078,
              },
              {
                name: "Mongolia",
                value: 2712.738,
              },
              {
                name: "Mozambique",
                value: 23967.265,
              },
              {
                name: "Mauritania",
                value: 3609.42,
              },
              {
                name: "Malawi",
                value: 15013.694,
              },
              {
                name: "Malaysia",
                value: 28275.835,
              },
              {
                name: "Namibia",
                value: 2178.967,
              },
              {
                name: "New Caledonia",
                value: 246.379,
              },
              {
                name: "Niger",
                value: 15893.746,
              },
              {
                name: "Nigeria",
                value: 159707.78,
              },
              {
                name: "Nicaragua",
                value: 5822.209,
              },
              {
                name: "Netherlands",
                value: 16615.243,
              },
              {
                name: "Norway",
                value: 4891.251,
              },
              {
                name: "Nepal",
                value: 26846.016,
              },
              {
                name: "New Zealand",
                value: 4368.136,
              },
              {
                name: "Oman",
                value: 2802.768,
              },
              {
                name: "Pakistan",
                value: 173149.306,
              },
              {
                name: "Panama",
                value: 3678.128,
              },
              {
                name: "Peru",
                value: 29262.83,
              },
              {
                name: "Philippines",
                value: 93444.322,
              },
              {
                name: "Papua New Guinea",
                value: 6858.945,
              },
              {
                name: "Poland",
                value: 38198.754,
              },
              {
                name: "Puerto Rico",
                value: 3709.671,
              },
              {
                name: "North Korea",
                value: 1.468,
              },
              {
                name: "Portugal",
                value: 10589.792,
              },
              {
                name: "Paraguay",
                value: 6459.721,
              },
              {
                name: "Qatar",
                value: 1749.713,
              },
              {
                name: "Romania",
                value: 21861.476,
              },
              {
                name: "Russia",
                value: 21861.476,
              },
              {
                name: "Rwanda",
                value: 10836.732,
              },
              {
                name: "Western Sahara",
                value: 514.648,
              },
              {
                name: "Saudi Arabia",
                value: 27258.387,
              },
              {
                name: "Sudan",
                value: 35652.002,
              },
              {
                name: "South Sudan",
                value: 9940.929,
              },
              {
                name: "Senegal",
                value: 12950.564,
              },
              {
                name: "Solomon Islands",
                value: 526.447,
              },
              {
                name: "Sierra Leone",
                value: 5751.976,
              },
              {
                name: "El Salvador",
                value: 6218.195,
              },
              {
                name: "Somaliland",
                value: 9636.173,
              },
              {
                name: "Somalia",
                value: 9636.173,
              },
              {
                name: "Republic of Serbia",
                value: 3573.024,
              },
              {
                name: "Suriname",
                value: 524.96,
              },
              {
                name: "Slovakia",
                value: 5433.437,
              },
              {
                name: "Slovenia",
                value: 2054.232,
              },
              {
                name: "Sweden",
                value: 9382.297,
              },
              {
                name: "Swaziland",
                value: 1193.148,
              },
              {
                name: "Syria",
                value: 7830.534,
              },
              {
                name: "Chad",
                value: 11720.781,
              },
              {
                name: "Togo",
                value: 6306.014,
              },
              {
                name: "Thailand",
                value: 66402.316,
              },
              {
                name: "Tajikistan",
                value: 7627.326,
              },
              {
                name: "Turkmenistan",
                value: 5041.995,
              },
              {
                name: "East Timor",
                value: 10016.797,
              },
              {
                name: "Trinidad and Tobago",
                value: 1328.095,
              },
              {
                name: "Tunisia",
                value: 10631.83,
              },
              {
                name: "Turkey",
                value: 72137.546,
              },
              {
                name: "United Republic of Tanzania",
                value: 44973.33,
              },
              {
                name: "Uganda",
                value: 33987.213,
              },
              {
                name: "Ukraine",
                value: 46050.22,
              },
              {
                name: "Uruguay",
                value: 3371.982,
              },
              {
                name: "United States of America",
                value: 312247.116,
              },
              {
                name: "Uzbekistan",
                value: 27769.27,
              },
              {
                name: "Venezuela",
                value: 236.299,
              },
              {
                name: "Vietnam",
                value: 89047.397,
              },
              {
                name: "Vanuatu",
                value: 236.299,
              },
              {
                name: "West Bank",
                value: 13.565,
              },
              {
                name: "Yemen",
                value: 22763.008,
              },
              {
                name: "South Africa",
                value: 51452.352,
              },
              {
                name: "Zambia",
                value: 13216.985,
              },
              {
                name: "Zimbabwe",
                value: 13076.978,
              },
            ],
          },
        ],
      };
      mapChart.setOption(options);
    }
  }, [current]);
  useEffect(() => {
    if (usaDOM.current) {
      const mapChart = echarts.init(usaDOM.current);

      echarts.registerMap("USA", JSON.stringify(usaJson), {
        Alaska: {
          left: -131,
          top: 25,
          width: 15,
        },
        Hawaii: {
          left: -110,
          top: 28,
          width: 5,
        },
        "Puerto Rico": {
          left: -76,
          top: 26,
          width: 2,
        },
      });

      const options = {
        tooltip: {
          trigger: "item",
          showDelay: 0,
          transitionDuration: 0.2,
        },
        visualMap: {
          left: "right",
          min: 500000,
          max: 38000000,
          inRange: {
            color: ["#D46B14", "#FFAD11", "#FFD600"],
          },
          text: ["High", "Low"],
          calculable: true,
        },
        series: [
          {
            name: "USA PopEstimates",
            type: "map",
            roam: true,
            map: "USA",
            emphasis: {
              label: {
                show: true,
              },
            },
            data: [
              { name: "Alabama", value: 4822023 },
              { name: "Alaska", value: 731449 },
              { name: "Arizona", value: 6553255 },
              { name: "Arkansas", value: 2949131 },
              { name: "California", value: 38041430 },
              { name: "Colorado", value: 5187582 },
              { name: "Connecticut", value: 3590347 },
              { name: "Delaware", value: 917092 },
              { name: "District of Columbia", value: 632323 },
              { name: "Florida", value: 19317568 },
              { name: "Georgia", value: 9919945 },
              { name: "Hawaii", value: 1392313 },
              { name: "Idaho", value: 1595728 },
              { name: "Illinois", value: 12875255 },
              { name: "Indiana", value: 6537334 },
              { name: "Iowa", value: 3074186 },
              { name: "Kansas", value: 2885905 },
              { name: "Kentucky", value: 4380415 },
              { name: "Louisiana", value: 4601893 },
              { name: "Maine", value: 1329192 },
              { name: "Maryland", value: 5884563 },
              { name: "Massachusetts", value: 6646144 },
              { name: "Michigan", value: 9883360 },
              { name: "Minnesota", value: 5379139 },
              { name: "Mississippi", value: 2984926 },
              { name: "Missouri", value: 6021988 },
              { name: "Montana", value: 1005141 },
              { name: "Nebraska", value: 1855525 },
              { name: "Nevada", value: 2758931 },
              { name: "New Hampshire", value: 1320718 },
              { name: "New Jersey", value: 8864590 },
              { name: "New Mexico", value: 2085538 },
              { name: "New York", value: 19570261 },
              { name: "North Carolina", value: 9752073 },
              { name: "North Dakota", value: 699628 },
              { name: "Ohio", value: 11544225 },
              { name: "Oklahoma", value: 3814820 },
              { name: "Oregon", value: 3899353 },
              { name: "Pennsylvania", value: 12763536 },
              { name: "Rhode Island", value: 1050292 },
              { name: "South Carolina", value: 4723723 },
              { name: "South Dakota", value: 833354 },
              { name: "Tennessee", value: 6456243 },
              { name: "Texas", value: 26059203 },
              { name: "Utah", value: 2855287 },
              { name: "Vermont", value: 626011 },
              { name: "Virginia", value: 8185867 },
              { name: "Washington", value: 6897012 },
              { name: "West Virginia", value: 1855413 },
              { name: "Wisconsin", value: 5726398 },
              { name: "Wyoming", value: 576412 },
              { name: "Puerto Rico", value: 3667084 },
            ],
          },
        ],
      };
      mapChart.setOption(options);
    }
  }, [current]);
  const onChange = (value: SegmentedValue) => {
    setCurrent(value);
  };
  return (
    <div className={`${styles.map} container`}>
      <Segmented
        options={["World", "USA"]}
        onChange={onChange}
        className={styles.button}
      />

      <Title className={styles.title}>We are one big family</Title>
      <Text className={styles.text}>All X-Campers, All Together</Text>
      <div
        ref={
          current === "World"
            ? (worldDOM as LegacyRef<HTMLDivElement>)
            : (usaDOM as LegacyRef<HTMLDivElement>)
        }
        className={styles.mapContainer}
      ></div>
    </div>
  );
};

export default Map;
