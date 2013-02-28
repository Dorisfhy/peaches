# change log
## 0.4.0
* 全新的css解析器，现在完美支持 CSS hack。
* 全新的云端支持，windows，mac，linux 全平台支持。

## 0.3.6Beta
* 支持 peaches -i a.css,b.css -o c.css
* 支持 peaches a.css b.css -o c.css
* peaches 配置文件默认加载 ~/.peaches/package.json
* peaches tmp 目录和图片合并默认目录，默认到 ~/.peaches/tmp 和 ~/.peaches/images
* 使用local 方式托管图片时，启动本地静态服务器。

## 0.3.3 2012-12-22
* 使用colorful作为logger输出工具，更友好的logger样式。
* 使用node原生程序下载文件
* bugfix 修复下载文件可能为空的情况。
* 新增 --clean 参数，用于强制下载已经缓存的图片。
* 更只能的参数输入，但输入错误时，程序会让用户选择合适的选项。

## 0.3.2 2012-12-19
* bugfix 无图片合并时会报错的处理。
* bugfix linux下，require区分大小写的处理。

## 0.3.1 2012-12-19
* 新增scp插件，用于将图片直接上传到服务器上，方便团队开发。

## 0.3.0 2012-12-18
* 配置文件新增 sort 参数，配置说明图片排序方式，0 表示 竖排 ，1 表示横排。默认为0

## 0.2.9 2012-12-09

* 配置文件新增 format 参数，配置说明输出图片的格式，默认为PNG8， 可选参数有 `png8` `png24`

## 0.2.8 2012-12-11

* 支持根据自定义图片大小（默认为80KB），自动分割合成的sprite图片。
* 合并background-image 以减少文件体积。
