<code-group>
 <code-block title="python" active>

```python

```

  </code-block>

  <code-block title="golang">

  ```go

  ```

  </code-block>

</code-group>





> [!IMPORTANT]



::: warning

这是一条注意

:::

::: danger

这是一条警告

:::



::: note

这是一条笔记

:::



::: tip

这是一条提示

:::



Badge

- **Props**:
  - `text` - string
  - `type` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`
  - `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`
- **Usage**:

你可以在标题文本的末尾，使用这个组件来为某些 API 添加一些状态：

```
### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>
```
