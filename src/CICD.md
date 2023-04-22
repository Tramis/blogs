# CICD

看了半天 `github actions`，它这个 `reusable workflow` 是否有些难用。

不同 `workflow` 之间的环境差异有点难以理解，如果环境不同，如何复用别的过程呢。

先用 `actions-rs/install` 顶上，以后看看有没有更好的讲解。

## 好像没用

这个包在第二次仍然重新编译了，似乎没有按他说的被加入 `Github cache`，难道这个过程也需要时间吗。

## 确实出问题了

tragic.
```
> Run actions-rs/install@v0.1.2
> Tool cache is explicitly enabled via the Action input
> Downloading from the tool cache
  Newest mdbook-katex version available at crates.io: 0.4.0
  Downloading mdbook-katex signature into /tmp/mdbook-katex.zip.sig
  Warning: Unable to download mdbook-katex == latest from the tool cache: Error: Unexpected HTTP response: 403
> Falling back to the `cargo install` command
```

看这 `repo` 的 `issue` 里边好像说不会修这个 `bug`。上次 `commit` 都是 2020 年了，令人感叹。
