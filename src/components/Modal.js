import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ showModal, setShowModal }) => {
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },

    }

    const modal = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "35rem",
            opacity: 1,
            transition: {delay: 0.5}
        }
    }
  return (
    <AnimatePresence exitBeforeEnter>Modal
        {showModal  && (
            <motion.div className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 3
                  }}
                exit="hidden"
            >
                <motion.div className="modal"
                    variants={modal}
                >
                    
                    <h2>How do you like Motion framer?</h2>
                    <Link to="/">
                        <button
                        onClick={() => setShowModal(false)} 
                        className="btn-modal">Start Again
                        </button>
                    </Link>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal