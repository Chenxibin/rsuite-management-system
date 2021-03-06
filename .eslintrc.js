'use strict';

const OFF = 0;
// const WARNING = 1;
const ERROR = 2;

module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'plugins': [
    'babel'
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },
  'rules': {
    'indent': [ERROR, 2, { 'SwitchCase': 1 }],    //规定代码的缩进方式：2个空格
    'camelcase': ERROR,                         //强制驼峰法命名
    'curly': ERROR,                             //必须使用 if(){} 中的{}
    'eqeqeq': ERROR,                            //必须使用全等
    'brace-style': [ERROR, '1tbs'],             //大括号风格
    'quotes': [ERROR, 'single'],                //引号类型
    'semi': [ERROR, 'always'],                  //语句强制分号结尾
    'space-infix-ops': ERROR,                   //中缀操作符周围要不要有空格
    'no-param-reassign': OFF,                   //不允许对函数的形参进行赋值
    'prefer-spread': ERROR,                     //首选展开运算
    'comma-dangle': OFF,                        //不允许或强制在对象字面量或者数组属性的结尾使用逗号
    'padded-blocks': OFF,                       //规定代码块前后是否要加空行
    'prefer-const': OFF,
    'no-var': OFF,
    'one-var': OFF
  }
};
