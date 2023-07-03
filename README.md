# マイクロフロントエンド サンプル

成果物:
 - main: https://mastar3104.github.io/micro-front-end-sample/
 - module1単品: https://mastar3104.github.io/micro-front-end-sample/module1
 - module2単品: https://mastar3104.github.io/micro-front-end-sample/module2

## マイクロフロントエンドとは
[参考資料](https://www.martinfowler.com/articles/micro-frontends.html)

いわゆるコンポーネント単位で異なるフロントエンドのアプリケーションを分割する手法。

利点としては、コンポーネント別にスケールが可能だったり、異なる技術を利用可能となる。

今回のサンプルではメインページがReact, module1をvue, module2をsvelteで実装した。

また、今回実装したのは `Run-time integration via JavaScript` という手法。

各フロントエンド(js)で、 `window.renderXxx` のようなメソッドを生成して、利用元のHTMLで呼び出す。

 - module1: [renderModule1](https://github.com/mastar3104/micro-front-end-sample/blob/main/module1/views/index.js#L6-L8)
 - module2: [renderModule2](https://github.com/mastar3104/micro-front-end-sample/blob/main/module2/views/index.js#L3-L7)
 - 上記を呼び出す[main](https://github.com/mastar3104/micro-front-end-sample/blob/main/main/index.html#L14-L22)
