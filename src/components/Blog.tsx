// import { useState } from 'react'
// import { useGreenMode } from '../context/GreenModeContext'
// import { Layout } from './shared/Layout'
// import { Card } from './shared/Card'
// import { theme } from '../styles/theme'
// import { blogPosts } from '../data/blogPosts'
// import type { BlogPost } from '../types/blog'

// export function Blog() {
//   const { isGreenMode } = useGreenMode()
//   const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

//   return (
//     <Layout
//       title={
//         <span className="flex items-center justify-center gap-2">
//           <span>✍️</span>
//           <span>Blog</span>
//         </span>
//       }
//       description="Explore our latest articles and insights"
//     >
//       {!selectedPost ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {blogPosts.map((post) => (
//             <button
//               key={post.id}
//               onClick={() => setSelectedPost(post)}
//               className={`p-6 rounded-lg transition-all bg-gray-100 hover:shadow-lg`}
//             >
//               <div className="text-2xl mb-2 font-bold">{post.title}</div>
//               <div className="text-gray-700 text-sm">{post.excerpt}</div>
//               <div className="mt-4 text-xs text-gray-500">
//                 Published: {post.date}
//               </div>
//             </button>
//           ))}
//         </div>
//       ) : (
//         <div className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={() => setSelectedPost(null)}
//               className={`${theme.text.primary(isGreenMode)} hover:opacity-80`}
//             >
//               ← Back to blog
//             </button>
//             <h3 className={theme.text.heading(isGreenMode)}>
//               {selectedPost.title}
//             </h3>
//           </div>

//           <Card>
//             <div className="space-y-4">
//               <p className={theme.text.secondary(isGreenMode)}>
//                 {selectedPost.content}
//               </p>
//               <div className="text-xs text-gray-500">
//                 Published on: {selectedPost.date}
//               </div>
//             </div>
//           </Card>
//         </div>
//       )}
//     </Layout>
//   )
// }

import { useState } from 'react'
import { useGreenMode } from '../context/GreenModeContext'
import { Layout } from './shared/Layout'
import { Card } from './shared/Card'
import { theme } from '../styles/theme'
import { blogPosts } from '../data/blogPosts'
import type { BlogPost } from '../types/blog'

export function Blog() {
  const { isGreenMode } = useGreenMode()
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  return (
    <Layout
      title={
        <span className="flex items-center justify-center gap-2">
          <span>✍️</span>
          <span>Blog</span>
        </span>
      }
      description="Explore our latest articles and insights"
    >
      {!selectedPost ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogPosts.map((post) => (
            <button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`p-6 rounded-lg transition-all bg-gray-100 hover:shadow-lg`}
            >
              {/* Adjusted font sizes using theme */}
              <div
                className={`mb-2 ${theme.text.heading(isGreenMode)} text-xl font-bold`}
              >
                {post.title}
              </div>
              <div className={`${theme.text.secondary(isGreenMode)} text-sm`}>
                {post.excerpt}
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Published: {post.date}
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedPost(null)}
              className={`${theme.text.primary(isGreenMode)} hover:opacity-80`}
            >
              ← Back to blog
            </button>
            <h3 className={theme.text.heading(isGreenMode)}>
              {selectedPost.title}
            </h3>
          </div>

          <Card>
            <div className="space-y-4">
              <p className={theme.text.secondary(isGreenMode)}>
                {selectedPost.content}
              </p>
              <div className="text-xs text-gray-500">
                Published on: {selectedPost.date}
              </div>
            </div>
          </Card>
        </div>
      )}
    </Layout>
  )
}