# e2etester 
##Introduction
The e2etester is an end to end test tool. It depand on [nightwatchjs](http://nightwatchjs.org/) and use[selenium-standalone](https://github.com/vvo/selenium-standalone) to manage selenium web driver.
##Prepare 
You should make sure [Java](http://www.java.com/zh_CN/) (v7 or higher)and [Node.js](https://nodejs.org/) has been installed.

# Startup

###Down load repository

    git clone https://github.com/zhsongqing/e2etester.git
    cd e2etester

###Install depends

    npm i
    npm run selenium-setup

###Startup demo test case

    npm run start

Check [nightwatchjs api](http://nightwatchjs.org/api)  for write an test case.

###Run your own test case

    npm run start -- [file or folder]

#Reference 

 1. You can modify selenium or web driver version in "./build/selenium-conf.js for "
 2. The default web driver is chrome. modify "nightwatch.json " for other web driver. use [nightwatchjs Configuration](http://nightwatchjs.org/gettingstarted#settings-file) for how to 
 3. Thx  [LancerComet](https://segmentfault.com/a/1190000005991670)

