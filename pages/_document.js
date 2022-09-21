import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const originalRenderPage = ctx.renderPage

//     // Run the React rendering logic synchronously
//     ctx.renderPage = () =>
//       originalRenderPage({
//         // Useful for wrapping the whole react tree
//         enhanceApp: (App) => App,
//         // Useful for wrapping in a per-page basis
//         enhanceComponent: (Component) => Component,
//       })

//     // Run the parent `getInitialProps`, it now includes the custom `renderPage`
//     const initialProps = await Document.getInitialProps(ctx)

//     return initialProps
//   }

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body className='bg-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument


/**
 * next에서 제공하는 document를 사용
 * page > _document.js라고 기본값 지정
 * 없으면 안되는 필수 페이지
 * 서버에서만 렌더링되므로 css, 이벤트 핸들러를 사용할 수 없습니다.
 */