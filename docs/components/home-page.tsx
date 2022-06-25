import React, { useContext } from 'react'
import styles from './home-page.less'
import { context } from 'dumi/theme'

export default () => {

  const { locale } = useContext(context)

  function trans<T>(en: T, zh: T) {
    return locale === 'zh' ? zh : en
  }

  return (
    <div className={styles.homePage}>
      {/* 内容部分 */}
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Aunt Design Mobile</h1>
            <p className={styles.description}>
              {trans(
                'Explore the limits of mobile web experience',
                '探索移动端 Web 的体验极限'
              )}
            </p>
            <p className={styles.buttons}>
              <a href={trans('/en/guide/quick-start', '/guide/quick-start')}>
                {trans('Get Started', '开始使用')}
              </a>
              <a href={trans('/en/components', '/components')}>
                {trans('Components', '组件列表')}
              </a>
            </p>
          </div>
          <img
            className={styles.headerImage}
            alt='header-image'
            src='https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/f45ff1f1-36e8-4dbe-a439-a1a09f9184c1.svg'
          />
        </div>
      </div>
      {/* 底部导航 */}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          Open-source MIT Licensed | Copyright © 2022-present Aunt
        </div>
      </div>
    </div>
  )
}
