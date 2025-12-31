'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export default function HomeApp() {

    return (
        <section className="relative min-h-screen flex items-center justify-center -mt-15 px-6 lg:px-20">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="max-w-4xl text-center lg:text-left"
            >
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Bem-vindo ao <span className="text-blue-700">Template Docs</span>
                </h1>

                <p className="mt-6 text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                    Um template de documentação — descrição extraída para o seu projeto.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                    <motion.a
                        href="/docs"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl border-blue-700 text-blue-700 hover:text-white font-medium border-2 hover:bg-blue-800 hover:border-blue-800 transition"
                    >
                        Começar agora
                        <motion.span
                            animate={{ x: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2 }}
                            className="inline-block"
                        >
                            <FaArrowRight />
                        </motion.span>
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}
