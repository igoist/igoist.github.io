## 自定义 Timeline


基本格局出来了，后面需要做的就是继续调整下样式细节，然后封装成组件
此外试着将样式文件调整为 .scss


### 剩下的怎么讲呢？先不管了，把问题列举出来：

- [x] 需要修正 <code>z-index</code> 无脑给 timeline 下的属性写了 <code>z-index: 9999</code>，跟 Navigator 导致冲突
- [ ] Media QUERIES：内容物宽高再考虑考虑


- [ ] 一个蛮重要的问题：关于 github page 无法加载非 static 目录下，或者说此例中 ./css/timeline.css、js