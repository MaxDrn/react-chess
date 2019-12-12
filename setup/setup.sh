#!/bin/bash
which -s brew
if [ $? -ne 0 ]; then
	/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
else
	brew update
fi
which -s node
if [ $? -ne 0 ]; then
	brew install node
fi
which -s git
if [ $? -ne 0 ]; then
	brew install git
fi
IS_A_DIR=false
if [ -d "./react-chess" ]; then
	IS_A_DIR=true
fi
if [ "$IS_A_DIR" = false ]; then
	git clone https://github.com/MaxDrn/react-chess
fi
cd ./react-chess
npm install react
npm start