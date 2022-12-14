import Head from 'next/head';
import { motion as m } from 'framer-motion';
import {
  item,
  footerContainer,
  footerItemContainer,
  enterPageVariantContainer,
  fadeInTransitionY,
} from '../animations';
import Footer from '../src/components/Footer';
import CustomRedirect from '../src/components/CustomRedirect';
// import { enterPageVariantContainer } from '../src/share/varians';
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen">
        <m.main
          variants={enterPageVariantContainer}
          initial="init"
          animate="show"
          exit={'exit'}
          className="bg-orange-100 page_scroll_container">
          <div className="page_content_container">
            <>
              <div className="overflow-hidden">
                <m.h1
                  variants={fadeInTransitionY('up')}
                  initial="init"
                  animate="show"
                  // animate={{ x: 0 }}
                  // initial={{ x: '100%' }}
                  // transition={{ duration: 0.5, delay: 0.5 }}
                  className="main_title">
                  Happy Pickle
                </m.h1>
              </div>

              <m.div variants={footerContainer} initial="hidden" animate="show">
                <div className="overflow-hidden">
                  <m.div
                    variants={footerItemContainer}
                    className="flex justify-between">
                    <div className="overflow-hidden">
                      <div className="overflow-hidden">
                        <m.h2 variants={item}>Design</m.h2>
                      </div>
                      <div className="overflow-hidden">
                        <m.h2 variants={item}>company</m.h2>
                      </div>
                      <div className="overflow-hidden">
                        <m.h2 variants={item}>2022</m.h2>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="overflow-hidden">
                        <m.h3 variants={item}>
                          This Pickle gonna make you smile.
                        </m.h3>
                      </div>
                      <div className="overflow-hidden">
                        <m.h3 variants={item}>
                          Scottish designs to make you happy.
                        </m.h3>
                      </div>
                      <div className="overflow-hidden">
                        <m.h3 variants={item}>
                          Click contact for cool transition.
                        </m.h3>
                      </div>
                    </div>
                  </m.div>
                </div>
              </m.div>
            </>
          </div>
        </m.main>
      </div>
      <main className="flex w-full h-screen bg-green-200 justify-center items-center">
        <div className="text-3xl px-48">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas hic
          saepe magni natus numquam, animi dolorem quos quam molestias
          cupiditate exercitationem voluptates repellat adipisci architecto
          nostrum esse voluptate eius itaque?
        </div>
      </main>
      <CustomRedirect redirectPath="/contact">
        <Footer color="bg-red-400" />
      </CustomRedirect>
    </>
  );
}
