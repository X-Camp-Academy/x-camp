#!/bin/bash
commit_id=$(git rev-parse --short=7 HEAD)
echo "最新提交 ID (前7位): $commit_id"
echo "{\"version\":\"$commit_id\"}" > ./public/version.json