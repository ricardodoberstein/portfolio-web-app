#!/bin/bash

source ../config/security.env
cd ..
npm install
npm run build
aws s3 sync build/ "s3://$S3_CLIENT_BUCKET_NAME" --delete
# aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
rm -rf ./build
