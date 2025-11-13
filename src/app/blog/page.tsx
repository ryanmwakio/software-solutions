import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Blog | Muoka Software Solutions",
  description: "Stay updated with the latest insights, tutorials, and industry trends in software development from the Muoka Software Solutions team.",
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to progressive web apps.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Web Development",
    author: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    publishedAt: "2024-01-15",
    readingTime: 8,
    slug: "future-web-development-2024"
  },
  {
    id: 2,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt: "Learn best practices for building scalable and performant mobile applications using React Native and modern development patterns.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Mobile Development",
    author: {
      name: "Jane Smith",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    publishedAt: "2024-01-10",
    readingTime: 12,
    slug: "scalable-mobile-apps-react-native"
  },
  {
    id: 3,
    title: "AI and Machine Learning in Business Applications",
    excerpt: "Discover how artificial intelligence and machine learning are transforming business processes and creating new opportunities.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "AI & ML",
    author: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    publishedAt: "2024-01-05",
    readingTime: 10,
    slug: "ai-ml-business-applications"
  },
  {
    id: 4,
    title: "Cloud Architecture Best Practices for Startups",
    excerpt: "Essential cloud architecture patterns and best practices that startups should consider when building scalable applications.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Cloud Computing",
    author: {
      name: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    publishedAt: "2023-12-28",
    readingTime: 15,
    slug: "cloud-architecture-startups"
  },
  {
    id: 5,
    title: "The Rise of Low-Code Development Platforms",
    excerpt: "Examining how low-code platforms are democratizing software development and their impact on traditional development workflows.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Technology Trends",
    author: {
      name: "David Brown",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    publishedAt: "2023-12-20",
    readingTime: 7,
    slug: "rise-low-code-platforms"
  },
  {
    id: 6,
    title: "Cybersecurity in Modern Software Development",
    excerpt: "Essential cybersecurity practices every development team should implement to build secure and resilient applications.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Security",
    author: {
      name: "Lisa Chen",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    publishedAt: "2023-12-15",
    readingTime: 11,
    slug: "cybersecurity-software-development"
  }
]

const categories = ["All", "Web Development", "Mobile Development", "AI & ML", "Cloud Computing", "Technology Trends", "Security"]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Blog & Insights
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Stay updated with the latest insights, tutorials, and industry trends 
            in software development from our expert team.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <Card className="mb-12 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-heading">
                  {blogPosts[0].title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {blogPosts[0].excerpt}
                </CardDescription>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={blogPosts[0].author.avatar}
                      alt={blogPosts[0].author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>{blogPosts[0].author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blogPosts[0].publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readingTime} min read</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/blog/${blogPosts[0].slug}`}>
                    Read Full Article
                  </Link>
                </Button>
              </CardHeader>
            </div>
          </Card>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-medium text-white bg-primary/80 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span>{post.readingTime} min</span>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, tutorials, 
            and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <Button size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}