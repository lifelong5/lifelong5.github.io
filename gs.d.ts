/** 加载指定的函数库: path 路径;无返回 */
 declare function IncludeScript(path:any):any;
/** 卸载指定的函数库: path 路径;无返回 */
 declare function ExcludeScript(path:any):any;
/** 脚本是否存在指定的函数: name 函数名;返回Boolean */
 declare function ExistFunction(name:any):any;
/** 定义结构映射表: name 结构名,如 Point; define 定义字串,如 x,y;无返回 */
 declare function DefineStruct(name:any,define:any):any;
/** 生成带结构的变量: var 数组引用; name 结构名 */
 declare function BindStruct(obj:any,name:any):any;
/** 设置下个线程的运行环境: cs 调用栈数值; rs 运行栈数值; vs 变量栈数值; pl 线程优先级;无返回 */
 declare function NextThreadEnvironment(cs:any,rs:any,vs:any,pl:any):any;
/** 设置下个线程的运行环境: cs 调用栈数值; rs 运行栈数值; vs 变量栈数值;无返回 */
 declare function NextThreadEnvironment(cs:any,rs:any,vs:any):any;
/** 开启一个系统线程,最多可带9个参数,第一个必需是函数名,如果优先级大于创建线程,会即时执行一次:name 新线程执行的函数名;返回 Object */
 declare function MainThread(name:any):any;
/** 开启一个子线程,最多可带9个参数,第一个必需是函数名,如果优先级大于创建线程,会即时执行一次,父线程结束后自动结束:name 新线程执行的函数名;返回 Object */
 declare function SelfThread(name:any):any;
/** 开启一个函数线程,最多可带9个参数,第一个必需是函数名,如果优先级大于创建线程,会即时执行一次,当前函数退出后自动结束;name 新线程执行的函数名;返回 object */
 declare function FuncThread(name:any):any;
/** 停止指定的线程对象: thread StartThread返回的对象;无返回 */
 declare function StopThread(thread:any):any;
/** 等待1帧:无返回 */
 declare function WaitFrame():any;
/** 等待指定的帧数: frame 帧数;无返回 */
 declare function WaitFrame(frame:any):any;
/** 将变量转成小数: var 变量;返回 Decimal */
 declare function ToDecimal(val:any):any;
/** 将变量转成数字: var 变量;返回 Number */
 declare function ToNumber(val:any):any;
/** 1将变量转成字串: var 变量;返回 String */
 declare function ToString(val:any):any;
/** 2将变量转成字串,保留指定小数位: var 变量;format 格式;返回 String */
 declare function ToString(val:any,format:any):any;
/** 如果是数组,返回成员数量,如果是字串,返回字串长度: var 变量;返回 number */
 declare function Length(val:any):any;
/** 在数组最后添加一个元素并返回: var 数组变量; value 值;返回 Var */
 declare function Append(val:any,value:any):any;
/** 在数组中指定位置插入一个元素并返回: var 数组变量; index 位置;value 值;返回 Var */
 declare function Insert(val:any,index:any,value:any):any;
/** 删除数组中指定位置的元素并返回: var 数组变量引用;index 位置;返回 Var */
 declare function Remove(val:any,index:any):any;
/** 清空数据的元素:var 数组变量引用;无返回 */
 declare function Clear(val:any):any;
/** 获取指定变量的类型,boolean,number,string,arrays,refers,object,null: var 变量;返回 String */
 declare function TypeOf(val:any):any;
/** 动态调用函数,可以额外再跟0至8个参数: name 函数名;... 参数;无返回 */
 declare function Evaluate(name:any):any;
/** 当前线程获得输入控制权,其他线程无法得到输入信息;无返回; */
 declare function GetControl():any;
/** 放弃当前线程输入控制权: 无返回 */
 declare function PutControl():any;
/** 当前线程是否获取控制权: 返回 Boolean */
 declare function HasControl():any;
/** 当前线程是否可获取输入: 返回 Boolean */
 declare function CanControl():any;
/** 获取虚拟机状态字串，按顺序分别是 虚拟机数量，全局变量数量，局部变量数量;无参数;返回 String */
 declare function State():any;
/** 获取线程优先级:无参数;返回 Number */
 declare function Priority():any;
/** 打印日志:obj 对象;无返回 */
 declare function Log(obj:any):any;
/** 使用指定的脚本创建一个新的舞台链:path 脚本路径;fullScreen 是否全屏;visible 强制可见;无返回 */
 declare function createStageChain(path:any,fullScreen:any,visible:any):any;
/** 设置当前舞台链的遮挡模式:fullScreen 是否全屏;无返回 */
 declare function setChainMask(fullScreen:any):any;
/** 跨舞台链函数调用,从最高层向最低层调用,返回被通知的舞台数:name 函数名称;data 参数;once 是否通知一个就返回;返回 Number */
 declare function stageChainInvoke(name:any,data:any,once:any):any;
/** 获取当前舞台链类型:无参数;返回 Number */
 declare function getChainType():any;
/** 获取最顶端舞台链类型:无参数;返回 Number */
 declare function getTopChain():any;
/** 获取当前帧本舞台是否有脚本级事件,包括切换,进入,退出:无参数;返回 Boolean */
 declare function hasChainEvent():any;
/** 在不变更舞台的情况下设置舞台的脚本:path 脚本路径;无返回 */
 declare function changeScript(path:any):any;
/** 保留当前舞台,进入新舞台并执行指定的脚本,需和exitScript连用:path 脚本路径;无返回 */
 declare function enterScript(path:any):any;
/** 退出当前舞台,回到上个保存的舞台:无参数;无返回 */
 declare function exitScript():any;
/** 清除本舞台之外的其他舞台:无参数;无返回 */
 declare function clearStage():any;
/** 打开一个TCP连接: address 地址;port 端口;overTime 超时时间;keepTime 心跳间隔;无返回 */
 declare function startConnect(address:any,port:any,overTime:any,keepTime:any):any;
/** 关闭已打开的TCP连接:无返回 */
 declare function stopConnect():any;
/** 向TCP连接发送一条消息:type 消息类型;data 消息内容;无返回 */
 declare function sendData(type:any,data:any):any;
/** 从TCP连接接收消息:无消息返回Null;返回 Array */
 declare function receData():any;
/** 创建一个HTTP连接: address 地址;无返回 */
 declare function startHttpConnect(address:any):any;
/** 关闭打开的HTTP连接:无返回 */
 declare function stopHttpConnect():any;
/** 用GET方式传递参数:args 参数;无返回 */
 declare function httpGet(args:any):any;
/** 用POST方式传递参数:args 参数;无返回 */
 declare function httpPost(args:any):any;
/** 获取HTTP资源内容长度:连接中返回-1,错误返回-1;返回 Number */
 declare function getContentSize():any;
/** 从HTTP下载资源:无返回 */
 declare function download():any;
/** 获取已下载HTTP资源内容长度:返回 Number */
 declare function getReceiveSize():any;
/** 将下载的ZIP数据解压到指定目录:path 目录;返回 Boolean */
 declare function parseZIP(path:any):any;
/** 将下载的TXT数据转为脚本:code 编码;返回 String */
 declare function parseTXT(code:any):any;
/** 将下载的XML数据转为脚本:返回 Array */
 declare function parseXML():any;
/** 打开系统文字输入界面:text 默认内容;hint 提示信息;type 类型 0:文字 1:文本 2:密码;length 最大可输入半角字符数量;无返回 */
 declare function showInputView(text:any,hint:any,type:any,length:any):any;
/** 关闭系统文字输入界面:无返回 */
 declare function hideInputView():any;
/** 获取系统文字输入内容:用户取消返回Null;返回 String */
 declare function getInputData():any;
/** 打开视频播放界面:url 视频内容路径;exit 中否可以中断;无返回 */
 declare function showVideoView(url:any,exit:any):any;
/** 关闭视频播放界面:无返回 */
 declare function hideVideoView():any;
/** 打开网页浏览界面:url 网页内容路径;arg 定制参数 宽,高,自定义;无返回 */
 declare function showWebView(url:any,arg:any):any;
/** 关闭网页浏览界面:无返回 */
 declare function hideWebView():any;
/** 获取网页浏览界面的返回内容:无内容返回Null;返回 String */
 declare function getWebData():any;
/** 创建截屏,操作会在下1帧完成:imagew 图片宽;imageh 图片高;无返回 */
 declare function createScreenshot(imagew:any,imageh:any):any;
/** 清除截屏:无返回 */
 declare function clearScreenshot():any;
/** 5创建一个用于离屏渲染的图片空间:path 空间名称;sw 空间宽度;sh 空间高度;format 图片格式(0:RGBA,1:RGB);mode 空间模式(0:3D,1:2d);无返回 */
 declare function createImageSpace(path:any,sw:any,sh:any,format:any,mode:any):any;
/** 6创建一个用于离屏渲染的图片空间:path 空间名称;sw 空间宽度;sh 空间高度;format 图片格式(0:RGBA,1:RGB);mode 空间模式(0:3D,1:2d);scale 是否根据屏幕比例自动缩放尺寸;无返回 */
 declare function createImageSpace(path:any,sw:any,sh:any,format:any,mode:any,scale:any):any;
/** 判定指定的图片空间是否需要重新绘制:path 空间名称;返回 Boolean */
 declare function imageSpaceIsClean(path:any):any;
/** 标记指定的图片空间需要重新绘制:path 空间名称;无返回 */
 declare function cleanImageSpace(path:any):any;
/** 1进入指定的2D图片空间,返回渲染标识:path 空间名称;返回 Object */
 declare function enterImageSpace(path:any):any;
/** 2进入指定的3D图片空间,返回渲染标识:path 空间名称;camera 像机;返回 Object */
 declare function enterImageSpace(path:any,camera:any):any;
/** 退出上次进入的图片空间;无返回 */
 declare function exitImageSpace():any;
/** 1渲染并绘制指定的图片空间:space 渲染标识;无返回 */
 declare function renderDrawSpace(space:any):any;
/** 4渲染并绘制指定的图片空间:space 渲染标识;x 坐标;y 坐标;anchor 定位点;无返回 */
 declare function renderDrawSpace(space:any,x:any,y:any,anchor:any):any;
/** 渲染指定的图片空间:space 渲染标识;无返回 */
 declare function renderSpace(space:any):any;
/** 1绘制指定的图片空间:path 图片空间;无返回 */
 declare function drawSpace(space:any):any;
/** 4绘制指定的图片空间:path 图片空间;x 坐标;y 坐标;anchor 定位点;无返回 */
 declare function drawSpace(path:any,x:any,y:any,anchor:any):any;
/** 0将当前图像缓冲绘制到屏幕上:path 图片空间;无返回 */
 declare function renderToScreen():any;
/** 4将指定图像缓冲绘制到屏幕上:path 图片空间;x 坐标;y 坐标;anchor 定位点;无返回 */
 declare function renderToScreen(path:any,x:any,y:any,anchor:any):any;
/** 1将当前图像缓冲绘制到指定空间上:dst;无返回 */
 declare function renderToSpace(dst:any):any;
/** 2将当前图像缓冲绘制到交换空间上:无返回 */
 declare function renderToSpace(src:any,dst:any):any;
/** 3将指定图像缓冲绘制到指定空间上:src;dst;无返回 */
 declare function renderToSpace(src:any,dst:any):any;
/** 1使用指定层的3D空间:无返回 */
 declare function useWorldSpace(layer:any):any;
/** 2使用指定层的3D空间,并定义摄像机:layer 层数; camera 摄像机(可以为像机数据或带像机的组合动画);无返回 */
 declare function useWorldSpace(layer:any,camera:any):any;
/** 3使用指定层的3D空间,并定义摄像机:layer 层数;sort 排序值;camera 摄像机(可以为像机数据或带像机的组合动画);无返回 */
 declare function useWorldSpace(layer:any,sort:any,camera:any):any;
/** 1使用指定层的2D空间:layer 层数;无返回 */
 declare function useUISpace(layer:any):any;
/** 2使用指定层的2D空间:layer 层数;sort 优先级;无返回 */
 declare function useUISpace(layer:any,sort:any):any;
/** 压入3D空间排序值; sort 排序值,可为负;无返回 */
 declare function pushSortLevel(sort:any):any;
/** 弹出3D空间排序值; 无返回 */
 declare function popSortLevel():any;
/** 进入批量绘制,3D中绘制2D时使用;无返回 */
 declare function enterGroup():any;
/** 退出批量绘制; 无返回 */
 declare function exitGroup():any;
/** 开始对2D空间的元素做材质排序;无返回 */
 declare function startSort():any;
/** 设置元素排序的深度; depth 深度值,可为负;无返回 */
 declare function setDepth(depth:any):any;
/** 清除元素排序深度;无返回 */
 declare function setDepth():any;
/** 结束2D空间的元素材质排序;无返回 */
 declare function stopSort():any;
/** 设置清屏使用的颜色: r 红色;g 绿色;b 蓝色;无返回 */
 declare function setClearColor(r:any,g:any,b:any):any;
/** 设置系统颜色: index 颜色标识,最大不超过64;color 颜色;无返回 */
 declare function setSysColor(index:any,color:any):any;
/** 设置绘图叠加颜色,范围[-255,255]: r 红色;g 绿色;b 蓝色;无返回 */
 declare function setColor(r:any,g:any,b:any):any;
/** 0清除绘图叠加颜色: 无返回 */
 declare function setColor():any;
/** 1设置绘图叠加颜色: c 颜色;无返回 */
 declare function setColor(c:any):any;
/** 0清除绘图透明度:无返回 */
 declare function setAlpha():any;
/** 1设置绘图透明度:a 透明度;无返回 */
 declare function setAlpha(a:any):any;
/** 准备定义不规则遮罩,之后绘制的图形,都会成为遮罩的一部分:无返回 */
 declare function defineMask():any;
/** 定义完成,启动遮罩效果:无返回 */
 declare function startMask():any;
/** 禁用遮罩:无返回 */
 declare function stopMask():any;
/** 0恢复屏幕裁剪区域:无返回 */
 declare function setClip():any;
/** 1设置屏幕裁剪区域:x 横坐标;y 纵坐标;w 宽度;h 高度;无返回 */
 declare function setClip(x:any,y:any,w:any,h:any):any;
/** 设置透明混合: mode 0禁用,1半透明,2高亮,3光影图;无返回 */
 declare function blendMode(mode:any):any;
/** 设置深度测试: mode 0禁用,1小于等于通用,2大于等于通过,3等于通过;无返回 */
 declare function testMode(mode:any):any;
/** 将当前的坐标变换矩阵压栈:无返回 */
 declare function pushMatrix():any;
/** 弹出上次的坐标变换矩阵:无返回 */
 declare function popMatrix():any;
/** 2设置矩阵偏移:x 偏移;y 偏移;无返回 */
 declare function translate(x:any,y:any):any;
/** 3设置矩阵偏移:x 偏移;y 偏移;z 偏移;无返回 */
 declare function translate(x:any,y:any,z:any):any;
/** 1设置矩阵旋转,大于0为顺时针旋转:a 角度;无返回 */
 declare function rotate(a:any):any;
/** 4设置矩阵旋转,大于0为顺时针旋转:a 角度;x X轴;y Y轴;z Z轴;无返回 */
 declare function rotate(a:any,x:any,y:any,z:any):any;
/** 2设置矩阵缩放,1.0为不变:x X轴缩放;y Y轴缩放;无返回 */
 declare function scale(x:any,y:any):any;
/** 3设置矩阵缩放,1.0为不变:x X轴缩放;y Y轴缩放;z Z轴缩放;无返回 */
 declare function scale(x:any,y:any,z:any):any;
/** 绘制矩形:x 起始横坐标;y 起始纵坐标;w 宽度;h 高度;无返回 */
 declare function drawRectangle(x:any,y:any,w:any,h:any):any;
/** 填充矩形:x 起始横坐标;y 起始纵坐标;w 宽度;h 高度;无返回 */
 declare function fillRectangle(x:any,y:any,w:any,h:any):any;
/** 绘制圆形:x 横坐标;y 纵坐标;r 半径;s 起始角度;a 绘制角度;无返回 */
 declare function drawCircle(x:any,y:any,r:any,s:any,a:any):any;
/** 填充圆形:x 横坐标;y 纵坐标;r 半径;s 起始角度;a 绘制角度;无返回 */
 declare function fillCircle(x:any,y:any,r:any,s:any,a:any):any;
/** 填充多边形:ary 三角形顶点形表;无返回 */
 declare function fillPolygon(ary:any):any;
/** 绘制多边形:ary 顶点列表;无返回 */
 declare function drawPolygon(ary:any):any;
/** 绘制直线:x1 起点横坐标;y1 起点纵坐标;x2 终点横坐标;y2 终点纵坐标 */
 declare function drawLine(x1:any,y1:any,x2:any,y2:any):any;
/** 4创建替换资源回调:src 源路径;dst 新路径;arg 参数;callback 函数名;返回 Object */
 declare function createReplaceCallback(src:any,dst:any,arg:any,callback:any):any;
/** 5创建替换资源回调:src 源路径;dst 新路径;arg 参数;callback 函数名;replace 子级替换;返回 Object */
 declare function createReplaceCallback(src:any,dst:any,arg:any,callback:any,replace:any):any;
/** 6创建资源替换对象:src 源路径;si 源索引;dst 新路径;di 新索引;arg 参数;callback 函数名;返回 Object */
 declare function createReplaceCallback(src:any,si:any,dst:any,di:any,arg:any,callback:any):any;
/** 7创建资源替换对象:src 源路径;si 源索引;dst 新路径;di 新索引;arg 参数;callback 函数名;replace 子级替换;返回 Object */
 declare function createReplaceCallback(src:any,si:any,dst:any,di:any,arg:any,callback:any,replace:any):any;
/** 创建替换资源材质:src 源路径;material 新材质;exce 例外的材质列表;返回 Object */
 declare function createReplaceMaterial(src:any,material:any,exce:any):any;
/** 2创建替换资源:src 源路径;dst 新路径;返回 Object */
 declare function createReplace(src:any,dst:any):any;
/** 3创建替换资源:src 源路径;dst 新路径;replace 子级替换;返回 Object */
 declare function createReplace(src:any,dst:any,replace:any):any;
/** 4创建替换资源:src 源路径;si 源索引;dst 新路径;di 新索引;返回 Object */
 declare function createReplace(src:any,si:any,dst:any,di:any):any;
/** 5创建替换资源:src 源路径;si 源索引;dst 新路径;di 新索引;replace 子级替换;返回 Object */
 declare function createReplace(src:any,si:any,dst:any,di:any,replace:any):any;
/** 创建一个图片,索引或变换大于等于0代表此参数在绘制时为默认参数:path 路径;index 索引;返回 Object */
 declare function createImage(path:any,index:any):any;
/** 1获取图块宽度和特效图片的图块宽度,索引为定义时的索引;image 图片对象;返回 Number */
 declare function getImageW(image:any):any;
/** 2获取图块宽度和特效图片的图块宽度:image 图片对象;index 图块索引;返回 Number */
 declare function getImageW(image:any,index:any):any;
/** 1获取普通和特效图片的图块高度,索引为定义时的索引:image 图片对象;返回 Number */
 declare function getImageH(image:any):any;
/** 2获取普通和特效图片的图块高度:image 图片对象;index 图块索引;返回 Number */
 declare function getImageH(image:any,index:any):any;
/** 1绘制普通切分块图片,特殊函数:image 图片标记 */
 declare function drawImage(image:any):any;
/** 2绘制普通切分块图片,特殊函数:image 图片标记;index 图块编号 */
 declare function drawImage(image:any,index:any):any;
/** 3绘制普通切分块图片,索引和变换使用定义时的默认参数:image 图片标记;x 横坐标;y 纵坐标;无返回 */
 declare function drawImage(image:any,x:any,y:any):any;
/** 4绘制切分块图片:image 图片对象;index 图块编号;x 横坐标;y 纵坐标;无返回 */
 declare function drawImage(image:any,index:any,x:any,y:any):any;
/** 创建动画播放器,index大于等于0 代表默认值:path 路径;index 索引;返回 Object */
 declare function createAnimationPlayer(path:any,index:any):any;
/** 1创建静态模型播放器:path 路径;返回 Object */
 declare function createModulePlayer(path:any):any;
/** 2创建骨骼模型播放器:path 路径;index 索引;返回 Object */
 declare function createModulePlayer(path:any,index:any):any;
/** 创建组合播放器,index大于等于0 代表默认值:path 路径;index 索引;返回 Object */
 declare function createCompositePlayer(path:any,index:any):any;
/** 创建粒子播放器:path 路径;返回 Object */
 declare function createParticlePlayer(path:any):any;
/** 设置舞台链更新速度:speed 速度1-4;无返回 */
 declare function setUpdateSpeed(speed:any):any;
/** 获取舞台链更新速度:返回 Number */
 declare function getUpdateSpeed():any;
/** 0恢复动画播放速度:无返回 */
 declare function setPlayRate():any;
/** 1设置动画播放速度:rate 速率1-100;无返回 */
 declare function setPlayRate(rate:any):any;
/** 获取动画播放速度:返回 Number */
 declare function getPlayRate():any;
/** 设置是否启用播放器的音效:player 播放器;enable 是否启用;无返回 */
 declare function enablePlayerSound(player:any,enable:any):any;
/** 2设置播放器的扩展回调:player 播放器;callback 回调函数;无返回 */
 declare function setPlayerCallback(player:any,callback:any):any;
/** 3设置播放器的扩展回调:player 播放器;args 回调参数;callback 回调函数;无返回 */
 declare function setPlayerCallback(player:any,args:any,callback:any):any;
/** 设置播放器的替换资源:player 播放器;replace 替换列表;无返回 */
 declare function setPlayerReplace(player:any,replace:any):any;
/** 设置播放器的替换级别:player 播放器;level 替换级别;无返回 */
 declare function setReplaceLevel(player:any,level:any):any;
/** 设置播放器的阴影显示:player 播放器;show 是否显示;无返回 */
 declare function setPlayerShadow(player:any,show:any):any;
/** 设置模型播放器的补间,持续1帧:player 播放器;index1 原始索引;frame 原始帧;index2 目标索引;blend 混合比;无返回 */
 declare function setModuleBlend(player:any,index1:any,frame:any,index2:any,blend:any):any;
/** 设置动画播放器的UI数据:player 播放器;data 数据列表;无返回 */
 declare function setAnimationData(player:any,data:any):any;
/** 设置并加载模型播放器项:player 播放器;index 索引;blend 插值;无返回 */
 declare function setModuleIndex(player:any,index:any,blend:any):any;
/** 停止粒子播放器的发射(限强制更新粒子):player 播放器;无返回 */
 declare function stopParticleEmit(player:any):any;
/** 设置并加载播放器项:player 播放器;index 索引;无返回 */
 declare function setPlayerIndex(player:any,index:any):any;
/** 设置播放器的帧:player 播放器;frame 帧;无返回 */
 declare function setPlayerFrame(player:any,frame:any):any;
/** 获取播放器的资源名:player 播放器;返回 String */
 declare function getPlayerPath(player:any):any;
/** 获取播放器的替换资源:player 播放器;返回 Array */
 declare function getPlayerReplace(player:any):any;
/** 获取动画播放器数据:player 播放器;返回 Array */
 declare function getAnimationData(player:any):any;
/** 获取模型播放器挂接:player 播放器;返回 Array */
 declare function getModuleMount(player:any):any;
/** 获取当前播放器索引:player 播放器;返回 Number */
 declare function getPlayerIndex(player:any):any;
/** 获取播放器当前索引总帧数:Player 播放器;返回 Number */
 declare function getPlayerFrameCount(player:any):any;
/** 获取当前播放器帧:player 播放器;返回 Number */
 declare function getPlayerFrame(player:any):any;
/** 1获取当前播放器区域,结果不持久 2D为[type,x,y,w,h],3D为[type,x,y,z,w,h,l]:player 播放器;返回 Array */
 declare function getPlayerCollision(player:any):any;
/** 3获取指定播放器区域,结果不持久 2D为[type,x,y,w,h],3D为[type,x,y,z,w,h,l]:player 播放器;index 索引;frame 帧;返回 Array */
 declare function getPlayerCollision(player:any,index:any,frame:any):any;
/** 1获取指定播放器宽度:player 播放器;返回 Number */
 declare function getPlayerW(player:any):any;
/** 2获取指定播放器宽度:player 播放器;index 索引;返回 Number */
 declare function getPlayerW(player:any,index:any):any;
/** 1获取指定播放器高度:player 播放器;返回 Number */
 declare function getPlayerH(player:any):any;
/** 2获取指定播放器高度:player 播放器;index 索引;返回 Number */
 declare function getPlayerH(player:any,index:any):any;
/** 1获取当前播放器脚本,结果不持久:player 播放器;返回 Array */
 declare function getPlayerScript(player:any):any;
/** 3获取指定播放器脚本,结果不持久:player 播放器;index 索引;frame 帧;返回 Array */
 declare function getPlayerScript(player:any,index:any,frame:any):any;
/** 更新播放器,返回是否播放完成:player 播放器;返回 Boolean */
 declare function updatePlayer(player:any):any;
/** 1更新并绘制播放器,返回是否播放完成:player 播放器;返回:Boolean */
 declare function updateDrawPlayer(player:any):any;
/** 3更新并绘制播放器,返回是否播放完成:player 播放器;x 坐标;y 坐标;返回:Boolean */
 declare function updateDrawPlayer(player:any,x:any,y:any):any;
/** 4更新并绘制播放器,返回是否播放完成:player 播放器;x 坐标;y 坐标;z 坐标;返回:Boolean */
 declare function updateDrawPlayer(player:any,x:any,y:any,z:any):any;
/** 1绘制播放器:player 播放器;无返回 */
 declare function drawPlayer(player:any):any;
/** 3绘制播放器:player 播放器;x 坐标;y 坐标;无返回 */
 declare function drawPlayer(player:any,x:any,y:any):any;
/** 4绘制播放器:player 播放器;x 坐标;y 坐标;z 坐标;无返回 */
 declare function drawPlayer(player:any,x:any,y:any,z:any):any;
/** 4绘制播放器:player 播放器;x 坐标;y 坐标;z 坐标;无返回 */
 declare function drawPlayer(player:any,x:any,y:any,z:any):any;
/** 上次的播放器是否被绘制:返回:Boolean */
 declare function drawingPass():any;
/** 播放是否完成:返回:Boolean */
 declare function updateOver(player:any):any;
/** 1获取播放器宽度:player 播放器;返回 Number */
 declare function getPlayerW(player:any):any;
/** 2获取播放器宽度:player 播放器;index 索引;返回 Number */
 declare function getPlayerW(player:any,index:any):any;
/** 1获取播放器高度:player 播放器;返回 Number */
 declare function getPlayerH(player:any):any;
/** 2获取播放器高度:player 播放器;index 索引;返回 Number */
 declare function getPlayerH(player:any,index:any):any;
/** 启用播放器的碰撞体;player 播放器;index 索引;info 附加数据:无返回 */
 declare function usePlayerCollision(player:any,index:any,info:any):any;
/** 禁用播放器的碰撞体;player 播放器;无返回 */
 declare function usePlayerCollision(player:any):any;
/** 0拾取碰撞体,有多个时返回最近的;返回 Object */
 declare function pickCollision():any;
/** 2拾取碰撞体,有多个时返回最近的;x 屏幕坐标;y 屏幕坐标:返回 Object */
 declare function  pickCollision(x:any,y:any):any;
/** 获取拾取列表;返回 Array */
 declare function getPickList():any;
/** 创建一个字符图片:path 路径;sign 符号;size 尺寸;gap 字间距;返回 Object */
 declare function createTextImage(path:any,sign:any,size:any,gap:any):any;
/** 3绘制图片字符:image 字符图片;text 字符;anchor 对齐方式;无返回 */
 declare function drawImageText(image:any,text:any,anchor:any):any;
/** 5绘制图片字符:image 字符图片;text 字符;x 横坐标;y 纵坐标;anchor 对齐方式;无返回 */
 declare function drawImageText(image:any,text:any,x:any,y:any,anchor:any):any;
/** 设置系统字体的通用环境参数:fontSize 尺寸;imagePath 填充用图片;italics 倾斜数值;ratio 整体缩放;无返回 */
 declare function setFontEnvironment(fontSize:any,imagePath:any,italics:any,ratio:any):any;
/** 创建指定类型的系统字体:fontType 类型;sourceW 缓冲宽;surceH 缓冲高;buffer 缓冲字符数;hgap 横向间距;vgap 纵向间距;无返回 */
 declare function createFont(fontType:any,sourceW:any,sourceH:any,buffer:any,hgap:any,vgap:any):any;
/** 设置要使用字体的类型:type 类型;无返回 */
 declare function selectFont(type:any):any;
/** 恢复默认字体类型;无返回 */
 declare function selectFont():any;
/** 3设置扩展字体参数，参数为-1代表不调整:fs 尺寸;fc 前景色,预定颜色编号;fi 是否倾斜;无返回 */
 declare function setAdvFont(fs:any,fc:any,fi:any):any;
/** 4设置扩展描边字体参数，参数为-1代表不调整:fs 尺寸;fc 前景色,预定颜色编号;bc 背景色,预定颜色编号;fi 是否倾斜;无返回 */
 declare function setAdvFont(fs:any,fc:any,bc:any,fi:any):any;
/** 2设置字体参数，参数为-1代表不调整:fs 尺寸;fc 前景色,预定颜色编号;无返回 */
 declare function setFont(fs:any,fc:any):any;
/** 3设置描边字体参数，参数为-1代表不调整:fs 尺寸;fc 前景色,预定颜色编号;bc 背景色,预定颜色编号;无返回 */
 declare function setFont(fs:any,fc:any,bc:any):any;
/** 获取字符的宽度:text 字符;size 尺寸;返回 Decimal */
 declare function textWidth(text:any,size:any):any;
/** 2绘制系统字符:text 字符;anchor 对齐方式;无返回 */
 declare function drawText(text:any,anchor:any):any;
/** 4绘制系统字符:text 字符;x 横坐标;y 纵坐标;anchor 对齐方式;无返回 */
 declare function drawText(text:any,x:any,y:any,anchor:any):any;
/** 4生成单行文字区域:string 文字内容;aniPlayer 使用的动画;table 宽度;line 行高;anchor 定位点;size 字体大小;fc 前景色;返回 Object */
 declare function createTextArea(string:any,anchor:any,size:any,fc:any):any;
/** 6生成文字区域,table为数字时,直接定义宽度,为数组则是定义表格 例:300, [0,10,300]:string 文字内容;table 宽度;line 行高;anchor 定位点;size 字体大小;fc 前景色;返回 Object */
 declare function createTextArea(string:any,table:any,line:any,anchor:any,size:any,fc:any):any;
/** 9生成文字区域,table为数字时,直接定义宽度,为数组则是定义表格 例:300, [0,10,300]:string 文字内容;image 使用的图片;table 宽度;line 行高;anchor 定位点;size 字体大小;fc 前景色;bc 背景色;effect 效果;返回 Object */
 declare function createTextArea(string:any,aniPlayer:any,table:any,line:any,anchor:any,size:any,fc:any,bc:any,effect:any):any;
/** 设置文字区域的扩展回调:textArea 文字区域;data 数据;func 回调函数;无返回 */
 declare function setTextAreaCallback(textArea:any,data:any,func:any):any;
/** 获取文字区域的行数:textArea 文字区域;返回 Number */
 declare function getTextAreaLine(textArea:any):any;
/** 获取文字区域的宽度:textArea 文字区域;返回 Number */
 declare function getTextAreaW(textArea:any):any;
/** 获取文字区域的高度:textArea 文字区域;返回 Number */
 declare function getTextAreaH(textArea:any):any;
/** 绘制文字区域，会使用默认参数:textArea 文字区域;start 开始行数;count 绘制行数;x 横坐标;y 纵坐标;无返回 */
 declare function drawTextArea(textArea:any,start:any,count:any,x:any,y:any):any;
/** 设置是否开启输入:enable 是否开启;无返回 */
 declare function enableInput(enable:any):any;
/** 清除输入状态:无返回 */
 declare function clearInput():any;
/** 设置触摸状态,类型 0:松开 1:按下 2:拖动:x 横坐标;y 纵坐标;type 类型;无返回 */
 declare function setInputState(x:any,y:any,type:any):any;
/** 无视控制权获取触摸状态 0:未知 1:按下 2:拖动:返回 Number */
 declare function sysInputState():any;
/** 0获取触点状态 0:未知 1:按下 2:拖动:返回 Number */
 declare function getInputState():any;
/** 1获取指定触点状态 0:未知 1:按下 2:拖动:返回 Number */
 declare function getInputState(id:any):any;
/** 0获取触点物理横坐标:返回 Number */
 declare function getInputX():any;
/** 1获取触点物理横坐标:返回 Number */
 declare function getInputX(id:any):any;
/** 0获取触点物理纵坐标:返回 Number */
 declare function getInputY():any;
/** 1获取触点物理纵坐标:返回 Number */
 declare function getInputY(id:any):any;
/** 获取当前触点标识:返回 Number */
 declare function usePointer():any;
/** 获取重力X轴的值，范围从0-100:返回 Number */
 declare function getGrayityX():any;
/** 获取重力Y轴的值，范围从0-100:返回 Number */
 declare function getGrayityY():any;
/** 获取重力Z轴的值，范围从0-100:返回 Number */
 declare function getGrayityZ():any;
/** 设置空按钮使用的通用动画:path 路径;index 索引;无返回 */
 declare function setEmptyButtonAnimation(path:any,index:any):any;
/** 创建一个空按钮:width 宽度;height 高度;anchor 对齐点;返回 Object */
 declare function createButton(width:any,height:any,anchor:any):any;
/** 创建一个按钮，状态为1-4:path 动画路径;type 状态;返回 Object */
 declare function createButton(path:any,type:any):any;
/** 设置按钮动画:button 按钮;player 动画播放器;无返回 */
 declare function setButtonAnimation(button:any,player:any):any;
/** 获取按钮动画:button 按钮;返回 Object */
 declare function getButtonAnimation(button:any):any;
/** 1绘制按钮，返回0为无动作，1为按下，2为按下移出，3为点击:button 标识;返回 Number */
 declare function drawButton(button:any):any;
/** 3绘制按钮，返回0为无动作，1为按下，2为按下移出，3为点击:button 标识;x 横坐标;y 纵坐标;返回 Number */
 declare function drawButton(button:any,x:any,y:any):any;
/** 设置按钮有效状态，只针对类型为4的按钮:button 标识;enable 是否有效;返回 Number */
 declare function enableButton(button:any,enable:any):any;
/** 清除当前点击按钮的状态:无返回 */
 declare function clearButton():any;
/** 将地形数据设为指定模型:path 模型路径;无返回 */
 declare function setTerrainModule(path:any):any;
/** 3获取射线和地形的交点:x 屏幕坐标;y 屏幕坐标;store 结果,以引用方式传入;无返回 */
 declare function findPoint(x:any,y:any,store:any):any;
/** 4获取射线和平面的位置:x 屏幕坐标;y 屏幕坐标;h 平面高度;store 结果,以引用方式传入;无返回 */
 declare function findPoint(x:any,y:any,h:any,store:any):any;
/** 3在地形上查找从起点到点击的路径:sx 起点位置;sy 起点位置;store 结果,以引用方式传入;无返回 */
 declare function findPath(sx:any,sy:any,store:any):any;
/** 6在地形上查找从起点到终点(附近)的路径:sx 起点位置;sy 起点位置;dx 终点位置;dy 终点位置;round 终点不可达时找附近的点;store 结果,以引用方式传入;无返回 */
 declare function findPath(sx:any,sy:any,dx:any,dy:any,round:any,store:any):any;
/** 指定点是否在地形中:x 位置;y 位置;返回 Boolean */
 declare function inPath(x:any,y:any):any;
/** 获取地形位置的高度:x 位置;y 位置;返回 Decimal */
 declare function mapHeight(x:any,y:any):any;
/** 1播放背景音乐:path 编号;无返回 */
 declare function playBGM(path:any):any;
/** 2播放背景音乐:path 编号;loop 循环;无返回 */
 declare function playBGM(path:any,loop:any):any;
/** 停止背景音乐:无返回 */
 declare function stopBGM():any;
/** 播放音效:path 编号;无返回 */
 declare function playSE(path:any):any;
/** 停止音效:无返回 */
 declare function stopSE():any;
/** 设置背景音乐声音大小 0-100:volume 音量;无返回 */
 declare function setBGMVolume(volume:any):any;
/** 设置音效声音大小 0-100:volume 音量;无返回 */
 declare function setSEVolume(volume:any):any;
/** 连接指定的地址:url 地址;返回 Boolean */
 declare function platformRequest(url:any):any;
/** 获取配置文件中的变量:key 变量名;返回 String */
 declare function getProperty(key:any):any;
/** 预加载组合动画:path 路径;index 索引;无返回 */
 declare function preloadComposite(path:any,index:any):any;
/** 预加载平面动画:path 路径;index 索引;无返回 */
 declare function preloadAnimation(path:any,index:any):any;
/** 预加载声音:path 路径;loop 循环;无返回 */
 declare function preloadMusic(path:any,loop:any):any;
/** 选择要使用的记录表:name 名称;返回 Boolean false代表不存在 */
 declare function selectRecord(name:any):any;
/** 删除当前的记录表:无返回 */
 declare function deleteRecord():any;
/** 加载当前的记录表,如果不存在,会新建一个:返回 Boolean false代表加载失败 */
 declare function loadRecord():any;
/** 保存当前的记录表:返回 Boolean false代表保存失败 */
 declare function saveRecord():any;
/** 设置当前记录表内容:key 标识;value 值,类型可为 Array,Boolean,Number,String,Null,可以嵌套;无返回 */
 declare function setData(key:any,value:any):any;
/** 获取当前记录表内容:key 标识;返回 Object */
 declare function getData(key:any):any;
/** 删除当前记录表内容:key 标识;无返回 */
 declare function delData(key:any):any;
/** 获取指定的数据表项的数量:table 表格编号;无返回 */
 declare function getTableCount(table:any):any;
/** 加载指定数据表的内容:table 表格编号;index 索引;filter 过滤器;create 是否创建成持久的;返回 Array */
 declare function getTableItem(table:any,index:any,filter:any,create:any):any;
/** 加载指定数据表的内容:table 表格编号;index 索引;create 是否创建成持久的;返回 Array */
 declare function getTableItem(table:any,index:any,create:any):any;
/** 重置游戏:无返回 */
 declare function restartGame():any;
/** 退出游戏:无返回 */
 declare function exitGame():any;
/** 跳过指定的绘制帧:frame 帧数;无返回 */
 declare function skipPaint(frame:any):any;
/** 获取游戏启动时间,以毫秒为单位:返回 Number */
 declare function getRunTime():any;
/** 获取当前系统,以秒为单位:返回 Number */
 declare function getSysTime():any;
/** 保存指定随机数生成器:index 索引;无返回 */
 declare function saveRandom(index:any):any;
/** 加载指定随机数生成器:index 索引;无返回 */
 declare function loadRandom(index:any):any;
/** 1设置0号随机数生成器的种子:seed 种子;无返回 */
 declare function setRandom(seed:any):any;
/** 2设置指定随机数生成器的种子,索引0-5:index 索引;seed 种子;无返回 */
 declare function setRandom(index:any,seed:any):any;
/** 1获取0号随机数生成器产生随机值:返回(0-range]:index 索引;range 范围;返回 Number */
 declare function getRandom(range:any):any;
/** 2获取指定随机数生成器产生随机值,索引0-5,返回(0-range]:index 索引;range 范围;返回 Number */
 declare function getRandom(index:any,range:any):any;
/** 设置脚本配置表的路径:path 路径;无返回 */
 declare function setShaderTable(path:any):any;
/** 0恢复默认的图片特效:无返回 */
 declare function setEffect():any;
/** 1切换到指定的图片特效:name 名称;无返回 */
 declare function setEffect(name:any):any;
/** 设置渲染脚本参数:index 参数编号;a1 成员1;a2 成员2;a3 成员3;a4 成员4;无返回 */
 declare function setArgument(index:any,a1:any,a2:any,a3:any,a4:any):any;
/** 设置渲染脚本矩阵:index 参数编号;mat 矩阵对象;无返回 */
 declare function setMatrix(index:any,mat:any):any;
/** 启动即时阴影渲染:shadowMap 用于渲染结果的图片空间;cObj 用于投影的像机;无返回 */
 declare function useShadowMap(shadowMap:any,cObj:any):any;
/** 启动即时投影渲染:blurMap 用于渲染结果的图片空间;inte 阴影浓度;无返回 */
 declare function useBlurMap(blurMap:any,mask:any):any;
/** 启用之后物体的阴影:无返回 */
 declare function startCast():any;
/** 关闭之后物体的阴影:无返回 */
 declare function stopCast():any;
/** 1获取指定组合里带的像机 angle,near,far,ex,ey,ez,cx,cy,cz,tilt:composite 组合;返回 Array */
 declare function getCameraFromComposite(composite:any):any;
/** 2获取指定组合里带的像机 angle,near,far,ex,ey,ez,cx,cy,cz,tilt:composite 组合;camera 存放数组;返回 Array */
 declare function getCameraFromComposite(composite:any,camera:any):any;
/** 3获取指定组合里带的像机 angle,near,far,ex,ey,ez,cx,cy,cz,tilt:composite 组合;index 索引;frame 帧;返回 Array */
 declare function getCameraFromComposite(composite:any,index:any,frame:any):any;
/** 获取当前像机的数据 angle,near,far,ex,ey,ez,cx,cy,cz,tilt;返回 Array */
 declare function getCamera():any;
/** 1获取指定组合里带的灯光 angle,near,far,ex,ey,ez,cx,cy,cz,tilt,scale,bias,alpha:composite 组合;返回 Array */
 declare function getLightFromComposite(composite:any):any;
/** 2获取指定组合里带的灯光 angle,near,far,ex,ey,ez,cx,cy,cz,tilt,scale,bias,alpha:composite 组合;camera 存放数组;返回 Array */
 declare function getLightFromComposite(composite:any,camera:any):any;
/** 3获取指定组合里带的灯光 angle,near,far,ex,ey,ez,cx,cy,cz,tilt,scale,bias,alpha:composite 组合;index 索引;frame 帧;返回 Array */
 declare function getLightFromComposite(composite:any,index:any,frame:any):any;
/** 进入公告板状态:lockY 是否锁定Y轴的朝向;scale 是否保留透视大小;无返回 */
 declare function startBillboard(lockY:any,scale:any):any;
/** 退出公告板状态:无返回 */
 declare function stopBillboard():any;
/** 设置伪投影图片:path 图片路径;无返回 */
 declare function setShadowImage(path:any):any;
/** 设置投影遮罩图片:path 图片路径;无返回 */
 declare function setBlurMapMask(path:any):any;
/** 绘制投影:r 半径;无返回 */
 declare function drawShadow(r:any):any;
/** 获取剩余存储空间,以M为单位:返回 Number */
 declare function getFreeSpace():any;
/** 清空指定的目录:path 路径;无返回 */
 declare function clearDirectory(path:any):any;
/** 删除指定的文件:path 路径;无返回 */
 declare function deleteFile(path:any):any;
/** 检查指定的文件是否存在:path 路径;返回 Boolean */
 declare function existFile(path:any):any;
/** 用归并排序对指定数据排序:array 源数据;callback 比较函数,接收a,b,如果a排在b之后,返回true;无返回 */
 declare function mergeSort(array:any,callback:any):any;
/** 设置数值指定位的值:num 数字;pos 位置;val 值;返回 Number */
 declare function setBit(num:any,pos:any,val:any):any;
/** 获取数值指定位的值(0 or 1):num 数字;pos 位置;返回 Boolean */
 declare function getBit(num:any,pos:any):any;
/** 查找字符串内容:string 字符串;src 查找内容;start 起始位置;返回 Number */
 declare function indexOf(string:any,src:any,start:any):any;
/** 截取字符串:string 字符串;start 起点;length 长度;返回 String */
 declare function subStr(string:any,start:any,length:any):any;
/** 切分字符串:string 字符串;mark 切分符;返回 Array */
 declare function split(string:any,mark:any):any;
/** 替换字符串内容:string 字符串;src 原内容;dst 新内容;返回 String */
 declare function replace(string:any,src:any,dst:any):any;
/** 将UI坐标转换到World坐标:x;y;z;store 结果;无返回 */
 declare function uiToWorld(x:any,y:any,z:any,store:any):any;
/** 将World坐标转换到UI坐标:x;y;z;store 结果;无返回 */
 declare function worldToUI(x:any,y:any,z:any,store:any):any;
/** 将局部坐标转换到UI坐标:x;y;store 结果;无返回 */
 declare function partToUI(x:any,y:any,store:any):any;
/** 将UI坐标转换到局部坐标:x;y;store 结果;无返回 */
 declare function UIToPart(x:any,y:any,store:any):any;
/** 反正切函数:y;x;返回 Decimal */
 declare function atan2(y:any,x:any):any;
/** 正切函数:angle 角度;返回 Decimal */
 declare function tan(angle:any):any;
/** 正弦函数:angle 角度;返回 Decimal */
 declare function sin(angle:any):any;
/** 余弦函数:angle 角度;返回 Decimal */
 declare function cos(angle:any):any;
/** 四舍五入:num 数值;返回 Decimal */
 declare function round(num:any):any;
/** 向下取整:num 数值;返回 Decimal */
 declare function floor(num:any):any;
/** 向上取整:num 数值;返回 Decimal */
 declare function ceil(num:any):any;
/** 求m的n次幂:m 数值;n 数值;返回 Decimal */
 declare function pow(m:any,n:any):any;
/** 开方:num 数值;返回 Decimal */
 declare function sqrt(num:any):any;
/** 返回一个空字典:返回 Map*/
declare function Map();
/** 将表的值输出到数组:map 表;create 是否将数组创建为持久;返回Array */
declare function valueToArray(map:any,create:boolean);
/** 将表的键输出到数组:map 表;create 是否将数组创建为持久;返回Array */
declare function keyToArray(map:any,create:boolean);
// /** 清空表:map 表;无返回 */
//  declare function clearMap(map:any):any;
// /** 获取表内容数量:map 表;返回 Number */
//  declare function getMapSize(map:any):any;
// /** 将表的内容输出到数组:map 表;create 是否将数组创建为持久;返回Array */
//  declare function mapToArray(map:any,create:any):any;
// /** 向表中添加项:map 表;key 键;val 值;无返回 */
//  declare function putValue(map:any,key:any,val:any):any;
// /** 从表中获取项:map 表;key 键;返回 Object */
//  declare function getValue(map:any,key:any):any;
// /** 从表中删除项:map 表;key 键;无返回 */
//  declare function delValue(map:any,key:any):any;
/** 局部变量:var 变量名 */
 declare var $Local;
/** 局部变量:var 变量名 */
 declare var Local;
/** 全局变量:var 变量名 */
 declare var $Global;
/** 全局变量:var 变量名 */
 declare var Global;
/** 用指定图片绘制九宫格面板:image 图片;x 横坐标;y 纵坐标;w 宽度;h 高度;anchor 锚点;无返回 */
 declare function drawNinePanel(image:any,x:any,y:any,w:any,h:any,anchor:any):any;
/** 把整数时间转换为年月日时分秒的数组:time 时间;返回 Array */
 declare function transTime(time:any):any;
/** 当前游戏渲染帧数;返回 Number */
 declare function fps():any;
/** 获取当前变换矩阵,结果不持久;返回 Object */
 declare function getTransform():any;
/** 获取变换矩阵的位移部分;transform 变换矩阵,store 结果;无返回 */
 declare function getTranslation(transform:any,store:any):any;
/** 获取变换矩阵的旋转部分;transform 变换矩阵,store 结果;无返回 */
 declare function getRotation(transform:any,store:any):any;
/** 获取变换矩阵的缩放部分;transform 变换矩阵,store 结果;无返回 */
 declare function getScale(transform:any,store:any):any;

/**大数字符串转为Bigger内部类型;返回Bigger */
declare function ToBigger(big:any):any;
/** 根据id获取CSV表格数据 结果;返回json */
declare function getCSVTableItem(path:any,id:any):any;
/** 获取指定表格总的数据行数, path 表格名; 结果;返回json */
declare function getCSVTableItemsCount(path:any):any;
/** 获取表格指定行数的数据, path 表格名; 结果;返回json */
declare function getCSVTableItemAt(path:any,idex:any):any;
/** 获取指定表格所有数据, path 表格名; 结果;返回Map */
declare function getCSVTableItemsSet(path:any):any;
/** 获取指定表格所有数据, path 表格名; 结果;返回Array */
declare function getCSVTableItemsArray(path:any):any;
/** 完全复制给定的变量;var 要复制的变量;返回 Var */
declare function fullCopy(obj:any):any;

/** 将字符串转为Map, string 字符串; 结果;返回Map */
declare function parseJSONString(string:any):any;
