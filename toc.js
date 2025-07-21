// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="start.html">start</a></li><li class="chapter-item expanded "><a href="from_the_beginning.html"><strong aria-hidden="true">1.</strong> From The Beginning</a></li><li class="chapter-item expanded "><a href="tls/TLS.html"><strong aria-hidden="true">2.</strong> TLS</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tls/racket.html"><strong aria-hidden="true">2.1.</strong> racket</a></li><li class="chapter-item expanded "><a href="tls/cons_and_list.html"><strong aria-hidden="true">2.2.</strong> cons and list</a></li><li class="chapter-item expanded "><a href="tls/stars.html"><strong aria-hidden="true">2.3.</strong> stars</a></li><li class="chapter-item expanded "><a href="tls/shadow.html"><strong aria-hidden="true">2.4.</strong> shadow</a></li><li class="chapter-item expanded "><a href="tls/friends_and_relations.html"><strong aria-hidden="true">2.5.</strong> friends and relations</a></li><li class="chapter-item expanded "><a href="tls/abstract_and_continuation.html"><strong aria-hidden="true">2.6.</strong> continuation</a></li><li class="chapter-item expanded "><a href="tls/halt.html"><strong aria-hidden="true">2.7.</strong> halt</a></li><li class="chapter-item expanded "><a href="tls/y.html"><strong aria-hidden="true">2.8.</strong> y(WIP)</a></li><li class="chapter-item expanded "><a href="tls/type.html"><strong aria-hidden="true">2.9.</strong> type(WIP)</a></li><li class="chapter-item expanded "><a href="tls/lazy.html"><strong aria-hidden="true">2.10.</strong> lazy(WIP)</a></li><li class="chapter-item expanded "><a href="tls/questions_TLS.html"><strong aria-hidden="true">2.11.</strong> questions</a></li><li class="chapter-item expanded "><a href="tls/practice_reverse_list.html"><strong aria-hidden="true">2.12.</strong> (practice)reverse_list</a></li></ol></li><li class="chapter-item expanded "><a href="cs144/cs144.html"><strong aria-hidden="true">3.</strong> cs144</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cs144/peek.html"><strong aria-hidden="true">3.1.</strong> peek</a></li><li class="chapter-item expanded "><a href="cs144/send_and_receive.html"><strong aria-hidden="true">3.2.</strong> send and receive</a></li></ol></li><li class="chapter-item expanded "><a href="os/os.html"><strong aria-hidden="true">4.</strong> os</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="os/2.批处理系统.html"><strong aria-hidden="true">4.1.</strong> 2.批处理系统</a></li><li class="chapter-item expanded "><a href="os/3.分时系统.html"><strong aria-hidden="true">4.2.</strong> 3.分时系统</a></li></ol></li><li class="chapter-item expanded "><a href="fp/fp.html"><strong aria-hidden="true">5.</strong> fp</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fp/不动点组合子与阶乘函数.html"><strong aria-hidden="true">5.1.</strong> 不动点组合子与阶乘函数</a></li></ol></li><li class="chapter-item expanded "><a href="algorithm/algorithm.html"><strong aria-hidden="true">6.</strong> algorithm</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="algorithm/minimum_cut_maximum_flow.html"><strong aria-hidden="true">6.1.</strong> minimum cut maximum flow</a></li><li class="chapter-item expanded "><a href="algorithm/tarjan.html"><strong aria-hidden="true">6.2.</strong> tarjan</a></li><li class="chapter-item expanded "><a href="algorithm/monotonic.html"><strong aria-hidden="true">6.3.</strong> monotonic</a></li><li class="chapter-item expanded "><a href="algorithm/fft.html"><strong aria-hidden="true">6.4.</strong> fft</a></li><li class="chapter-item expanded "><a href="algorithm/CBA.html"><strong aria-hidden="true">6.5.</strong> CBA</a></li><li class="chapter-item expanded "><a href="algorithm/hashmap.html"><strong aria-hidden="true">6.6.</strong> hashmap</a></li><li class="chapter-item expanded "><a href="algorithm/huffman.html"><strong aria-hidden="true">6.7.</strong> huffman</a></li><li class="chapter-item expanded "><a href="algorithm/LIS.html"><strong aria-hidden="true">6.8.</strong> LIS</a></li></ol></li><li class="chapter-item expanded "><a href="concurrency/concurrency.html"><strong aria-hidden="true">7.</strong> concurrency</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="concurrency/Mutex_Semaphore_monitor.html"><strong aria-hidden="true">7.1.</strong> Mutex, Semaphore, Monitor</a></li></ol></li><li class="chapter-item expanded "><a href="math/math.html"><strong aria-hidden="true">8.</strong> math</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="math/指数的泰勒级数收敛到原函数.html"><strong aria-hidden="true">8.1.</strong> 指数的泰勒级数收敛到原函数</a></li><li class="chapter-item expanded "><a href="math/jacobi.html"><strong aria-hidden="true">8.2.</strong> jacobi行列式和隐函数存在</a></li><li class="chapter-item expanded "><a href="math/implicit_function_partial_derivation.html"><strong aria-hidden="true">8.3.</strong> 隐函数偏导</a></li><li class="chapter-item expanded "><a href="math/conti_partial_deriv_differentiate.html"><strong aria-hidden="true">8.4.</strong> 连续，偏导，可微</a></li><li class="chapter-item expanded "><a href="math/仅求单个偏导.html"><strong aria-hidden="true">8.5.</strong> 仅求单个偏导</a></li><li class="chapter-item expanded "><a href="math/taylor.html"><strong aria-hidden="true">8.6.</strong> 泰勒</a></li><li class="chapter-item expanded "><a href="math/first_mean_value_theorem_of_definited.html"><strong aria-hidden="true">8.7.</strong> 积分中值</a></li><li class="chapter-item expanded "><a href="math/limits.html"><strong aria-hidden="true">8.8.</strong> 一些极限题目</a></li><li class="chapter-item expanded "><a href="math/infinity_small.html"><strong aria-hidden="true">8.9.</strong> 同阶无穷小的归化</a></li><li class="chapter-item expanded "><a href="math/de.html"><strong aria-hidden="true">8.10.</strong> 微分方程</a></li><li class="chapter-item expanded "><a href="math/magic_integral.html"><strong aria-hidden="true">8.11.</strong> 神奇积分题</a></li><li class="chapter-item expanded "><a href="math/wallis.html"><strong aria-hidden="true">8.12.</strong> 点火</a></li><li class="chapter-item expanded "><a href="math/triangle_integral.html"><strong aria-hidden="true">8.13.</strong> 其他三角函数分式积分</a></li><li class="chapter-item expanded "><a href="math/curve_integral.html"><strong aria-hidden="true">8.14.</strong> 曲线积分😋</a></li><li class="chapter-item expanded "><a href="math/曲面积分.html"><strong aria-hidden="true">8.15.</strong> 曲面积分</a></li><li class="chapter-item expanded "><a href="math/曲面面积投影积分.html"><strong aria-hidden="true">8.16.</strong> 曲面面积投影积分</a></li><li class="chapter-item expanded "><a href="math/project_cylinder.html"><strong aria-hidden="true">8.17.</strong> 投影柱面的联立和消元</a></li><li class="chapter-item expanded "><a href="math/volumn_of_revolution.html"><strong aria-hidden="true">8.18.</strong> 极坐标下图形绕极轴旋转的体积</a></li><li class="chapter-item expanded "><a href="math/拉格朗日乘数法.html"><strong aria-hidden="true">8.19.</strong> 拉格朗日乘数</a></li><li class="chapter-item expanded "><a href="math/梯度和法向量.html"><strong aria-hidden="true">8.20.</strong> 梯度和法向量</a></li><li class="chapter-item expanded "><a href="math/green_gauss_stokes.html"><strong aria-hidden="true">8.21.</strong> 格林，高斯，斯托克斯</a></li><li class="chapter-item expanded "><a href="math/series.html"><strong aria-hidden="true">8.22.</strong> 级数</a></li><li class="chapter-item expanded "><a href="math/subtle.html"><strong aria-hidden="true">8.23.</strong> 一些微妙的问题</a></li><li class="chapter-item expanded "><a href="math/fact.html"><strong aria-hidden="true">8.24.</strong> 常用事实</a></li><li class="chapter-item expanded "><a href="math/abstract_solution.html"><strong aria-hidden="true">8.25.</strong> 一些有点抽象的解法</a></li><li class="chapter-item expanded "><a href="math/examples.html"><strong aria-hidden="true">8.26.</strong> 特例</a></li><li class="chapter-item expanded "><a href="math/floor_and_ceil.html"><strong aria-hidden="true">8.27.</strong> 向上向下取整</a></li><li class="chapter-item expanded "><a href="math/分块矩阵.html"><strong aria-hidden="true">8.28.</strong> 分块矩阵</a></li><li class="chapter-item expanded "><a href="math/线性微分方程.html"><strong aria-hidden="true">8.29.</strong> 线性微分方程</a></li><li class="chapter-item expanded "><a href="math/least_square.html"><strong aria-hidden="true">8.30.</strong> 最小二乘</a></li><li class="chapter-item expanded "><a href="math/假设检验.html"><strong aria-hidden="true">8.31.</strong> 假设检验</a></li></ol></li><li class="chapter-item expanded "><a href="CICD/CICD.html"><strong aria-hidden="true">9.</strong> CICD</a></li><li class="chapter-item expanded "><a href="english/english.html"><strong aria-hidden="true">10.</strong> english</a></li><li class="chapter-item expanded "><a href="dl/softmax.html"><strong aria-hidden="true">11.</strong> AI</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="test/test.html">TEST</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
