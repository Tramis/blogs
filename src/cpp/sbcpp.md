# 这篇 `blog` 的标题叫做：傻逼cpp

## 一定要藏起来的 `this` 指针

```cpp
struct A{
    void foo(){
        std::cout << "sbcpp" << std::endl;
    }
};

int main(){
    A* a_ptr = nullptr;
    a_ptr->foo();
    return 0;
}
```

连 `python` 都有 `self` 了

## 一定要有的歧义

```cpp
void call(int x){
    std::cout << "value" << std::endl;
}

void call(int &x){
    std::cout << "ref" << std::endl;
}

int main(){
    int a = 1;
    int& b = a;

    call(a);
    call(b);

    return 0;
}
```

两个调用都会报歧义 `error`，白色和蛋黄融为一体，这不神奇吗？
