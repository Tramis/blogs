# CICD

看了半天 `github actions`，它这个 `reusable workflow` 是否有些难用。

不同 `workflow` 之间的环境差异有点难以理解，如果环境不同，如何复用别的过程呢。

先用 `actions-rs/install` 顶上，以后看看有没有更好的讲解。

## 好像没用

这个包在第二次仍然重新编译了，似乎没有按他说的被加入 `Github cache`，难道这个过程也需要时间吗。
