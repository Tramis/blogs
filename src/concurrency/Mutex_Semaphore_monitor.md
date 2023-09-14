# 互斥锁，信号量，以及管程

## Mutex

等价于二值信号量，即 `Semaphore(cnt = 1, limit = 1)`

## Semaphore

*Dijkstra* 作为荷兰人给它两个操作起名 `P, V`，但我看大伙好像都叫它 `accquire, release`

`accquire` 时阻塞

## Monitor (Conditional Variable)

管程，其实压根没看这是啥，

## 经典同步问题

[写的测试工具](https://github.com/Tramis/concurrency_test)

也许不该用 `Rust` 来写，它编译的时候多线程环境就要求 `Sync + Send`，有时候显得我加的东西多此一举，比如读者优先的读写问题
