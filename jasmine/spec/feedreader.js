/* feedreader.js
 *
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在你应用上面运行的测试。
 */

/* 我们把所有的测试都放在了 $() 函数里面。因为有些测试需要 DOM 元素。
 * 我们得保证在 DOM 准备好之前他们不会被运行。
 */
$(function() {
    /* 这是我们第一个测试用例 - 其中包含了一定数量的测试。这个用例的测试
     * 都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
    */
    describe('RSS Feeds', function() {
        /* 这是我们的第一个测试 - 它用来保证 allFeeds 变量被定义了而且
         * 不是空的。在你开始做这个项目剩下的工作之前最好实验一下这个测试
         * 比如你把 app.js 里面的 allFeeds 变量变成一个空的数组然后刷新
         * 页面看看会发生什么。
        */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的【所有的源】来保证【有链接字段】而且【链接不是空】的。
         */
         it('遍历 allFeeds 对象里面的【所有的源feed】来保证【有链接字段】而且【链接不是空】的',function(){
             allFeeds.forEach(function(feed){//allFeeds里有4个对象
                 expect(feed.url).toBeDefined();
                 expect(feed.url).not.toEqual('');
             });
         });

        /* TODO:
         * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
         */
        it('编写一个测试遍历 allFeeds 对象里面的【所有的源】来保证【有名字字段】而且【不是空的】', function(){
            allFeeds.forEach(function(feed){//allFeeds里有4个对象
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toEqual('');
            });
        });
    });


    /* TODO: 写一个叫做 "The menu" 的测试用例 */
    describe('The menu', function(){

        /* TODO:
         * 写一个测试用例保证菜单元素默认是隐藏的。你需要分析 html 和 css
         * 来搞清楚我们是怎么实现隐藏/展示菜单元素的。
         */
        it('写一个测试用例保证【菜单元素】默认是【隐藏】的', function(){
            expect($('.menu-hidden').length).not.toEqual(0);
        });

         /* TODO:
          * 写一个测试用例保证当【菜单图标】【被点击】的时候菜单会切换【可见】状态。这个
          * 测试应该包含两个 expectation ： 党【点击】图标的时候菜单【是否显示】，
          * 【再次点击】的时候【是否隐藏】。
          */

         it('【点击】图标的时候,菜单【显示】', function(){
            $('.menu-icon-link').click();//那个按钮在app.js被设为menuIcon
            expect($('.menu-hidden').length).toEqual(0);
         });
         it('【再次点击】的时候,菜单【隐藏】', function(){
            $('.menu-icon-link').click();
            expect($('.menu-hidden').length).not.toEqual(0);
         });

    });

    /* TODO: 13. 写一个叫做 "Initial Entries" 的测试用例 */
    describe('Initial Entries', function(){
        /* TODO:
         * 写一个测试保证 【loadFeed 函数】被调用而且工作正常，即在 【.feed 容器元素】
         * 里面至少有一个 【.entry 的元素】。
         *
         * 记住 loadFeed() 函数是【异步】的所以这个而是应该使用 Jasmine 的 【beforeEach】
         * 和异步的 【done() 】函数。
         */
         beforeEach(function(done){
            loadFeed(3, function(){
              done();
            });
         });
         it('在 【.feed 容器元素】里面至少有一个 【.entry 的元素】', function(done){
           expect($('.feed .entry').length).not.toEqual(0);
           done();
         });
    });

    /* TODO: 写一个叫做 "New Feed Selection" 的测试用例 */
    describe('New Feed Selection', function(){
        /* TODO:
         * 写一个测试保证当用 【loadFeed 函数】加载一个【新源】的时候【内容会真的改变】。
         * 记住，loadFeed() 函数是【异步】的。
         */

        //调用loadFeed函数之前，无内容
        it('调用loadFeed函数之前，无内容', function(){
          expect(document.querySelector('.feed').innerHTML).toBe('');
        });
        //调用loadFeed函数之后，有内容

    });

}());
