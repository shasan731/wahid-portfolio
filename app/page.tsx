import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Target,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image src="/wahid-photo.jpg" alt="Md. Wahid Akter" fill className="object-cover" />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">Md. Wahid Akter</h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-6">
                Digital Marketing Specialist & Strategic Marketing Professional
              </p>
              <p className="text-lg text-slate-200 mb-8 max-w-2xl">
                Transforming 12+ years of traditional marketing expertise into cutting-edge digital marketing solutions.
                Specializing in data-driven strategies that deliver measurable results for businesses.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a href="mailto:wahid016@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://wa.me/8801712107582" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">About Me</h2>
            <Card className="p-8">
              <CardContent className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  With over 12 years of proven marketing experience in pharmaceutical and real estate industries, I
                  bring a unique blend of traditional marketing wisdom and modern digital strategies. My journey from
                  Field Marketing Executive at ACI Limited to Digital Marketing Specialist represents a strategic
                  evolution in today's digital-first business landscape.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Armed with an MBA in Marketing and extensive hands-on experience, I specialize in creating
                  comprehensive digital marketing campaigns that bridge the gap between traditional marketing principles
                  and innovative digital tactics. My approach focuses on understanding customer behavior, market
                  dynamics, and leveraging data to drive sustainable business growth.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  <div className="text-center">
                    <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-8 h-8 text-emerald-600" />
                    </div>
                    <p className="font-semibold text-slate-800">Strategic Planning</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="font-semibold text-slate-800">Growth Marketing</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <p className="font-semibold text-slate-800">Customer Insights</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="w-8 h-8 text-orange-600" />
                    </div>
                    <p className="font-semibold text-slate-800">Data Analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Field Marketing Executive</h3>
                    <p className="text-emerald-600 font-semibold mb-2">ACI Limited (Pharma Division)</p>
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>May 2012 - January 2024 (11+ years)</span>
                    </div>
                    <p className="text-slate-700 mb-4">
                      Led comprehensive marketing strategies for pharmaceutical products, managing field operations,
                      customer relationships, and market penetration initiatives. Developed deep expertise in customer
                      behavior analysis, market research, and strategic campaign execution.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Market Research</Badge>
                      <Badge variant="secondary">Customer Relationship Management</Badge>
                      <Badge variant="secondary">Strategic Planning</Badge>
                      <Badge variant="secondary">Sales Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Executive - Marketing & Sales</h3>
                    <p className="text-blue-600 font-semibold mb-2">Akankha Developers Ltd.</p>
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>July 2010 - April 2012 (2 years)</span>
                    </div>
                    <p className="text-slate-700 mb-4">
                      Managed marketing and sales operations for real estate development projects. Gained valuable
                      experience in customer acquisition, market positioning, and integrated marketing communications
                      across multiple channels.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Lead Generation</Badge>
                      <Badge variant="secondary">Brand Positioning</Badge>
                      <Badge variant="secondary">Customer Acquisition</Badge>
                      <Badge variant="secondary">Market Analysis</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">MBA - Major in Marketing</h3>
                    <p className="text-purple-600 font-semibold">
                      University of Liberal Arts Bangladesh, Dhanmondi, Dhaka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">M.S.S - Major in Economics</h3>
                    <p className="text-emerald-600 font-semibold">National University (Dhaka College), Dhaka</p>
                    <p className="text-slate-600">2nd Class, 2002</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">B.S.S - Major in Economics</h3>
                    <p className="text-blue-600 font-semibold">National University (B.L. College), Daulatpur, Khulna</p>
                    <p className="text-slate-600">2nd Class, 2001</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Core Competencies</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardContent>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Digital Marketing</h3>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2">SEO/SEM</Badge>
                    <Badge className="mr-2 mb-2">Social Media Marketing</Badge>
                    <Badge className="mr-2 mb-2">Content Marketing</Badge>
                    <Badge className="mr-2 mb-2">Email Marketing</Badge>
                    <Badge className="mr-2 mb-2">PPC Advertising</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Analytics & Strategy</h3>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2">Google Analytics</Badge>
                    <Badge className="mr-2 mb-2">Market Research</Badge>
                    <Badge className="mr-2 mb-2">Customer Segmentation</Badge>
                    <Badge className="mr-2 mb-2">Campaign Optimization</Badge>
                    <Badge className="mr-2 mb-2">ROI Analysis</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent>
                  <h3 className="text-lg font-bold text-slate-800 mb-4">Traditional Marketing</h3>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2">Brand Management</Badge>
                    <Badge className="mr-2 mb-2">Field Marketing</Badge>
                    <Badge className="mr-2 mb-2">Customer Relations</Badge>
                    <Badge className="mr-2 mb-2">Sales Strategy</Badge>
                    <Badge className="mr-2 mb-2">Market Penetration</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Let's Work Together</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent>
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                  <p className="text-slate-300">01712 - 10 75 82</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <p className="text-slate-300">wahid016@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 p-6">
                <CardContent>
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                  <p className="text-slate-300">Khulna, Bangladesh</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-slate-300 mb-6">
                Ready to elevate your digital marketing strategy? Let's discuss how my expertise can drive your business
                growth.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <a href="mailto:wahid016@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="https://wa.me/8801712107582" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Md. Wahid Akter. All rights reserved.</p>
          <p className="mt-2">Digital Marketing Specialist | Strategic Marketing Professional</p>
        </div>
      </footer>
    </div>
  )
}
