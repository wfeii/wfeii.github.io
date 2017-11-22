var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Activity",
      excerpt: "创建Activity\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Fragment",
      excerpt: "什么是Fragment？\nFragment不是Activity，但是需要内嵌到Activtiy中，Fragment不是容器（viewGroup或者其子类），通常Fragment创建ViewGroup.\nFragment代表的是一种行为或者Activity的用户界面的一部分。\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "Fragment Usage",
      excerpt: "使用Fragment实现代码与布局的复用\n源码是 Androidbase / Fragment / FragmentExample / 中的DynamicFragment相关的代码。\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Brodcast",
      excerpt: "基础\n什么是android中的广播?\n广播就是在Android系统中发生某件事情（电量，电话的来电与去电等等），然后会向android系统中发送消息的组件\n\n",
      categories: ["Android","Android基础"],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Bound Services",
      excerpt: "基础\n如何绑定service?\n\n  创建一个bound service\n  在组件中调用bindService()方法进行绑定\n\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "menu和action bar",
      excerpt: "从android3.0开始传统的6-items的菜单被action bar的形式所取代，在这篇文章中，将使用action bar方式实现menu，并且使用的是支持库的方式，这样可以解决版本兼容问题。\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "menu和actionbar",
      excerpt: "context menu的创建\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "Services",
      excerpt: "基础\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "ContentProvider",
      excerpt: "什么是Android中的Content Provider\n\n",
      categories: ["外功招式","Android","Android基础"],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "异步处理一",
      excerpt: "异步处理\n\n",
      categories: ["外功招式","Android","Android进阶"],
      tags: ["Background_jobs"],
      id: 9
    });
    
  
    idx.add({
      title: "Android事件传递机制",
      excerpt: "Touch事件处理\n\n",
      categories: ["外功招式","Android","Android进阶"],
      tags: ["Android事件传递机制"],
      id: 10
    });
    
  
    idx.add({
      title: "升级Gradle3.0",
      excerpt: "\n\n",
      categories: ["Gradle"],
      tags: ["Gradle",3.0],
      id: 11
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Activity",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/activity/",
        "excerpt": "创建Activity 什么是Android中的Activity？ 一个activity是提供一个界面，用于与用户交互（打电话，发邮件等）的应用组件。 如何创建一个Activity呢？ 在layout中定义个布局文件 定义一个Activity（或者已存在的Activity子类）的子类，并实现相关的方法. 在AndroidManifest.xml中配置Activity 定义一个Activity子类时，要实现哪些方法呢 onCreate(): 你必须实现这个方法，系统会在创建activity时，调用此方法，在这个方法中初始化的activity重要部分，尤其是调用setContentView()使用资源资源来设置activity的界面。 onPause(): 当用户将要离开activity时，系统调用的第一方法就是此方法，通常保存在当前会话中的变化的信息。 更多的activity信息请看管理生命周期 如何在在AndroidManifest.xml中配置呢？ &lt;manifest ... &gt; &lt;application ... &gt;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fragment",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/fragment/",
        "excerpt": "什么是Fragment？ Fragment不是Activity，但是需要内嵌到Activtiy中，Fragment不是容器（viewGroup或者其子类），通常Fragment创建ViewGroup. Fragment代表的是一种行为或者Activity的用户界面的一部分。 为什么要使用Fragment呢？ Android是在3.0时引入的Fragment，为了更好的支持大屏幕设备（平板）。使用Fragment来封装UI和Java代码，提高了复用性。 什么时候使用Fragment呢？ 逻辑共享：不同设备和屏幕尺寸之间共享UI和逻辑，通常用于平板电脑 回退导航：把fragment添加到堆栈中，当回退时，就会出栈，这种实现方式避免了activity的重建 整体滑动的效果：与ViewPager一起使用实现整体滑动的效果 怎么使用Fragment呢？ 可以查看 Androidbase / Fragment / FragmentExample /下的FirstFragment相关的代码 在activity的布局文件中声明 这种方式就好像fragment是一个View一样，但这种方式缺乏灵活性，不能动态的更改fragment，较少使用。 &lt;?xml...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Fragment Usage",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/fragment/",
        "excerpt": "使用Fragment实现代码与布局的复用 源码是 Androidbase / Fragment / FragmentExample / 中的DynamicFragment相关的代码。 实现的效果：在手机中处理title与content显示在不同的界面,在平板中左边显示title,右边显示content。 查看效果图 实现的思路： 在手机中加载的布局和平板加载的布局肯定不同，要分别定义不同的布局。在手机中点击title，跳转到另一界面显示content，可以使用两个fragment分别让activity关联。在平板中不涉及界面的跳转，可以在布局文件中使用&lt;fragment&gt;标签来定义。 实现的步骤： 定义不同的布局，在本例中定义了两个布局文件activity_dynamic_fragment,一个是在layout中定义（用于手机使用）,一个是layout-large中定义(用于平板)。 定义title的fragment和content的fragment 在Activity的onCreate()方法中content相关的view是否存在，不存在就是手机设备要把title的fragment加到activity中。 title点击处理使用了回调的方式，手机的处理方式是添加content的fragment,而平板的处理方式是获取content的fragment来更新。 使用Fragment实现滑动的效果 源码是在Androidbase...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Brodcast",
        "url": "http://localhost:4000/android/android%E5%9F%BA%E7%A1%80/brodcast/",
        "excerpt": "基础 什么是android中的广播? 广播就是在Android系统中发生某件事情（电量，电话的来电与去电等等），然后会向android系统中发送消息的组件 Android系统中发生某件事情，怎么向android系统中发送消息呢？ 有两种方式，一个通过发送正常的广播，sendBroadcast(),或者发送有序广播，sendOrderedBroadcast()。 发送正常的广播（也可称为无序广播）和发送有序广播有什么区别呢？ 正常广播(也可称为无序广播)：所有接受者都可同时接受到广播，更加的高效，但是接受者不能取消广播。 有序广播:一次只能传递给一个接受者（根据android:priority，）上一级接收者可以传送数据给下一级，并且可以中止广播 。 ** Notice: 有序广播的接受是根据属性中priority来判断优先级的，对于优先级越高，越较早接收到广播，相同的优先级，会根据AndroidManfiest.xml中的顺序调用。** 如何使用广播呢? 定义广播接收器,继承自BroadcastReceiver或其子类，覆写onReceive()方法。 注册定义的广播接收器。 如何注册定义的广播接收者呢？ 使用代码注册 //监听的广播的动作 IntentFilter filter...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Bound Services",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/boundservices/",
        "excerpt": "基础 如何绑定service? 创建一个bound service 在组件中调用bindService()方法进行绑定 如何创建一个bound Service呢？ 继承Service，用于绑定的类，首先，必须提供一个IBinder用于与客户端(例如Activity) 交互,有三种方式可以提供此IBinder,每一种方式又有不同的实现方式。 继承Binder(实现了IBinder)类 使用Messenger 使用AIDL 其次是在onBind()中返回IBinder Notice:多个clients连接到service时，只在第一次绑定时调用onBind()方法获取 IBinder对象，对于其他的clients，系统直接传递一个IBinder，不会再调 用onBind()方法. #### 创建bound service三种方式可以提供此IBinder,如何选择呢？ 继承Binder：...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "menu和action bar",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/menuandactionbar/",
        "excerpt": "从android3.0开始传统的6-items的菜单被action bar的形式所取代，在这篇文章中，将使用action bar方式实现menu，并且使用的是支持库的方式，这样可以解决版本兼容问题。 三种菜单类型 options menu context menu popup menu 如何定义menu 在res/menu/下使用xml中定义menu item, 代码中填充菜单 直接在代码中创建menu，添加menu条目 NOTICE： 最好使用menu资源来定义menu items It’s easier...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "menu和actionbar",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/menuandactionbar/",
        "excerpt": "context menu的创建 context menu可以使用到任意view上，但通常使用在ListView，GridView的items上，或者其他用户能够执行item操作的view集合。 有两种方式可以创建context menu In a floating context menu. A menu appears as a floating list of menu...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Services",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/services/",
        "excerpt": "基础 什么是Android中的Serice？ Service是一个长期运行在后台不提供用户界面的组件。 Service听起来像是一个线程，它们有什么区别？ 线程独立主线程（UI线程）之外，而Service可以运行在主线程（默认情况下)中，也可以不在其中。 线程一旦被启动，只有满足相应的条件才能停止，而Service开启，可以通过stopService()或者unbindService()来停止。 Service如何启动呢？ started ： 在组件(例如activity)中调用startService()，一旦启动将会长时间运行在后台，通常started的服务用于执行单个操作并且不需要返回结果给开启者。例如下载，当完成下载，应该调用stopSelf()方法”自杀”。 bound : 在组件中调用bindService()方法，bound的服务允许组件发送请求，获取结果，甚至可以进行进程间通信（IPC）,当service没有被绑定时，service对象将会被销毁。 Notice: service默认运行在主进程的主线程中，这就意味着如果service要处理耗时操作或者阻塞操作(例如Map3播放，联网，蓝牙连接），应该在服务中开启工作线程来做这些工作，通过这种方式可以减少应用无响应(Application Not Responding ANR)的发生。 Started Service...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "ContentProvider",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E5%9F%BA%E7%A1%80/contentprovider/",
        "excerpt": "什么是Android中的Content Provider Content Provider是用于管理访问结构化数据集的一种组件，最经常管理数据集是数据库。content provider会封装数据，提供数据安全的机制。content provider用于一个进程与另一个运行中的进程的数据连接。 Notice: 当不打算共享数据给其他应用时，不需要定义自己的Content Provider. Content Provider如何表示数据的呢？ Content Provider呈现数据是通过一个或多个表，类似与数据库，使用Content Provider跟使用数据库相类似。 如何访问Content Povider? Content Provider的访问很简单 定义Uri 获取ContentResolver对象...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "异步处理一",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E8%BF%9B%E9%98%B6/%E5%BC%82%E6%AD%A5%E5%A4%84%E7%90%86/",
        "excerpt": "异步处理 Handler A Handler allows you to send and process Message and Runnable objects associated with a thread’s MessageQueue. Each...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Android事件传递机制",
        "url": "http://localhost:4000/%E5%A4%96%E5%8A%9F%E6%8B%9B%E5%BC%8F/android/android%E8%BF%9B%E9%98%B6/Touch%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86/",
        "excerpt": "Touch事件处理 Activity中的Touch事件处理函数 有touch事件来的时候,会调用Activity的dispatchTouchEvent()派发事件,然后会调用getWindow().superDispatchTouchEvent(ev)派发事件,最终会调用布局中的View. public boolean dispatchTouchEvent(MotionEvent ev) { if (ev.getAction() == MotionEvent.ACTION_DOWN) { onUserInteraction(); } if (getWindow().superDispatchTouchEvent(ev)) { return true;...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "升级Gradle3.0",
        "url": "http://localhost:4000/gradle/%E5%8D%87%E7%BA%A7Gradle3.0/",
        "excerpt": "概述 Android Gradle 3.0.0插件是一个大版本的升级，对多个module带来了显著的性能提升。但同时也改变了一些此插件的行为，DSL和APIS。 升级到Gradle3.0.0会带来以下的性能提升： 由于构建per-call dexing提高了构建速度，每个类编译成独立的DEX文件，并且仅仅被修改的类重新编译。为了提高构建APK的速度，需要设置minSdkVersion到20，或者更低但使用 legacy multi-dex。 当改变依赖项时，Gradle通过不访问依赖项的API的module不重新编译的方式来提高构建速度。通过使用Gradle的新的依赖项的配置(implementation, api, compileOnly, and runtimeOnly)，可以严格的控制依赖项的API的暴露。 升级 配置Gradle版本 Android plugin 3.0.0 要求Gradle4.1或者更高的版本。...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
