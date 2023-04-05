#!/bin/sh
UUID=${UUID:-'772d2ed1-190b-4b71-aff4-010815e11274'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
