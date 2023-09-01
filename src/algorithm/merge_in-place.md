# 就地归并

```cpp
4, 5, 6, 9, 1, 2, 7, 8
1, 5, 6, 9, 4, 2, 7, 8
1, 2, 6, 9, 4, 5, 7, 8
1, 2, 4, 9, 6, 5, 7, 8
1, 2, 4, 5, 6, 9, 7, 8
```

```cpp
/// [l, m) 和 [m, r) 上均为有序数组，求归并这两部分
void merge(int a[], int l, int m, int r){
    if(l + 1 >= m || m + 1 >= r){
        return;
    }

    int l1 = l;
    int l2 = m;
    int tmp_l = m;

    while(l1 < m && l2 < r){
        if(a[l1] < a[l2]){
            if(tmp_l < l2){
                if(a[l1] < a[tmp_l]){
                    l1++;
                } else {
                    std::swap(a[l1++], a[tmp_l++])
                }
            } else {
                l1++;
            }
        } else {
            if(tmp_l < l2){
                if(a[l2] < a[tmp_l]){
                    std::swap(a[l1++], a[l2++]);
                } else {
                    std::swap(a[l1++], a[tmp_l++]);
                }
            } else {
                std::swap(a[l1++], a[l2++]);
            }
        }
    }

    if(l1 < m){
        merge(a, l1, tmp_l, r);
    } else {
        merge(a, tmp_l, l2, r);
    }
}

/// 1, 5, 7, 2, 4, 6

```
