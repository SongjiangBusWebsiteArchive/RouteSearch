# 松江公交线路查询网站镜像

## 项目说明

本仓库为松江公交线路查询系统的完整镜像，与其门户网站镜像 [SongjiangBusWebsiteArchive/MainSite](https://github.com/SongjiangBusWebsiteArchive/MainSite) 共同构成松江公交官方网站的归档项目。

松江公交官方网站计划于2025年9月1日正式关闭（详见官方公告：[关于关闭松江公交门户网站的公告](https://mp.weixin.qq.com/s/ywsayA6J95-TIjNRSBbuIQ)）。本镜像于2025年8月29日至31日期间完成抓取与重构。

- **原官方网址**：[http://xlcx.shsjgj.com:8020/](http://xlcx.shsjgj.com:8020/)
- **镜像访问地址**：[https://xlcx.shsjgj.bobliu.tech/](https://xlcx.shsjgj.bobliu.tech/)

## 镜像详情

本镜像采用 wget 完成初始抓取（原始文件保存于 [original 分支](https://github.com/SongjiangBusWebsiteArchive/RouteSearch/tree/original)），并对动态内容进行了静态化重构。

### 原系统功能异常记录

**线路查询主页**
- 搜索功能实际不可用
- “松江97路”被错误分类为“区域内线路”
- 真正的“区域内线路”数据缺失
- “穿梭巴士”列表为空（实际数据归类为“最后一公里线路”，但页面中无此分类）

**首末班车查询页面**
- “穿梭巴士”列表为空（原因同上）

**交通枢纽信息页面**
- 页面内容为空

**公交线路图页面**
- 城区与乡镇线路图中，线路位置有所偏移

**站点查询功能**
- 站点位置标识有所偏移

**线路详情页面**
- 线路走向信息部分缺失
