SAUCE_ACCESS_KEY=`echo $SAUCE_ACCESS_KEY | rev`

if [ $JOB = "smoke" ]; then
  node bin/protractor spec/smokeConf.js
elif [ $JOB = "suite" ]; then
  node bin/protractor spec/ciConf.js
elif [ $JOB = "special" ]; then
  out=`node bin/protractor spec/specialConf.js`
  echo $out
  if [ $out = "0" ]; then
    echo "successful"
  else
    echo "FAIL"
  fi
else
  echo "Unknown job type. Please set JOB=smoke or JOB=suite"
fi
