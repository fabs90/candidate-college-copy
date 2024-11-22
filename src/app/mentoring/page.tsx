"use client";
import react, { useState } from "react";
import { CTA, Footer, Navbar } from "@/components";
import Link from "next/link";
import Image from "next/image";
import CardFounder from "@/components/about/CardFounder";
// import {Swiper, SwiperSlide} from "swiper/swiper-react";
// import {Navigation} from "swiper/types/modules";
// import SkeletonSliderTestimonial from "@/components/about/SkeletonSliderTestimonials";
// import CardSliderTestimonials from "@/components/about/CardSliderTestimonials";
// import {formatArticleTitle} from "@/utils/formatArticleTitle";
// import {formatName} from "@/utils/formatName";
import React from "react";
import avatar from '../public/decoration/avatar-4.png'
import {classSectionPaket} from "@/data/staticData";
// import { Play } from 'lucide-react'
import { Play, Calendar, CheckCircle } from 'lucide-react'
// import { Button } from "@/components/ui/button"



const items = [
    {
        title: 'Flexible Learning',
        description: 'we have a place to study flexibly',
        icon: '/SVGRepo_iconCarrier.png',
        bgColor: 'bg-[#E9EDF9]',
    },
    {
        title: 'Expert Instructors',
        description: 'Learning Videos',
        icon: '/SVGRepo_iconexpert.png',
        bgColor: 'bg-[#FDF2E9]',
    },
    {
        title: 'Interactive Community',
        description: 'Study Club',
        icon: '/Vectorcomunication.png',
        bgColor: 'bg-[#E9F7FE]',
    },
]



const mentoring= () => {
    return (
        <main className="bg-primary h-full">
            {/* Navbar */}
            <Navbar
                className="animate__animated animate__fadeInDownBig"
                active="Mentoring"
                isDetail={false}
            />

            {/*section 1 */}
            <section className="bg-[#1b4e6b] text-white py-16 px-4 md:px-8 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold">
                                <span className="text-[#ffa500]">Studying</span> Online is now<br/>
                                much easier
                            </h2>
                            <p className="text-lg">
                                At LearnEase, we believe in the power of education that transcends boundaries. Our
                                online platform is
                                designed to bring the classroom experience to your fingertips, making learning a truly
                                immersive and
                                convenient journey.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    className="bg-[#4a90e2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3a7bc8] transition duration-300">
                                    Join for free
                                </button>
                                <button
                                    className="flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold border border-white hover:bg-white hover:text-[#0e2a47] transition duration-300">
                                    <Play size={20}/>
                                    Watch how it works
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student_mentoring-5J6fqfb2mze3qKlPkcau9VMcSS3icH.png"
                                alt="Happy student with notebooks"
                                width={500}
                                height={600}
                                className="mx-auto"
                            />
                            <div
                                className="absolute top-4 left-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-3 flex items-center gap-2">
                                <Calendar className="text-[#4a90e2]"/>
                                <div>
                                    <p className="font-semibold">3000+</p>
                                    <p className="text-sm">Number of Registrants</p>
                                </div>
                            </div>
                            <div
                                className="absolute top-1/2 right-4 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-3">
                                <p className="font-semibold flex items-center gap-2">
                                    <CheckCircle className="text-green-400"/>
                                    Congratulations
                                </p>
                                <p className="text-sm">Your admission completed</p>
                            </div>
                            <div
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-3">
                                <p className="text-sm mb-1">Scholarship Training Classes</p>
                                <button
                                    className="bg-[#ffa500] text-[#0e2a47] px-4 py-1 rounded-full text-sm font-semibold hover:bg-[#e69500] transition duration-300">
                                    Join Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*section 2*/}

            <section className="bg-[#1b4e6b] text-white py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <div className="relative h-48">
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/packet%201%20-x3aMVl5XsY6LTnVzfD0aoGaYQ8XC9J.png"
                                        alt="Premium Scholarship Preparation Class"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-[#0e2a47] text-xl font-bold mb-2">Packet 1</h3>
                                    <p className="text-[#0e2a47] text-2xl font-bold mb-4">Rp450.000</p>
                                    <ul className="text-black-600 mb-4">
                                        <li className="text-[#0e2a47]">• Review essay</li>
                                        <li className="text-[#0e2a47]">• Review CV ...</li>
                                    </ul>
                                    <button
                                        className="bg-yellow-400 text-[#0e2a47] px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                                        Packet Detail
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                <div className="relative h-48">
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/packet%202-TKmaOtbO6mb0VPVNvBZ1HBKpQAbJEz.png"
                                        alt="Get your dream scholarship"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-[#0e2a47] text-xl font-bold mb-2">Packet 2</h3>
                                    <p className="text-[#0e2a47] text-2xl font-bold mb-4">Rp640.000</p>
                                    <ul className="text-gray-600 mb-4">
                                        <li className="text-[#0e2a47]">• Review essay</li>
                                        <li className="text-[#0e2a47]">• Review CV ...</li>
                                    </ul>
                                    <button
                                        className="bg-yellow-400 text-[#0e2a47] px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                                        Packet Detail
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full h-[400px]">
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px]">
                                <div
                                    className="absolute inset-0 bg-yellow-400 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                                <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
                                <Image
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/student%202-OXcdczidmXPDMDi6qvLueZ3aWlrCti.png"
                                    alt="Student reading a book"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mt-12 text-center">
                        Take our intensive class by purchasing the following package
                    </h2>
                </div>
            </section>


            {/*Section 3*/}

            <section className="bg-[#1b4e6b] py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-purple-600">All-In-One</span>{' '}
                        <span className="text-orange-500">Solution</span>
                    </h2>
                    <p className="text-white text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                        Skilline is one powerful online software suite that combines all the
                        tools needed to run a successful school or office.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {items.map((item, index) => (
                            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                                <div
                                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${item.bgColor}`}>
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-[#0e2a47] font-semibold mb-2">{item.title}</h3>
                                <p className="text-black">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/*section 4 */}

            <section className="bg-[#1b4e6b] text-white py-12 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Review <span className="text-yellow-400">Essay & CV?</span>
                    </h2>
                    <p className="text-center mb-10 max-w-3xl mx-auto text-sm">
                        LearnEase is an innovative online learning platform designed to make education
                        accessible, engaging, and adaptable to your lifestyle. It offers a diverse range of courses
                        taught by experts in various fields. With LearnEase, you can learn at your own pace,
                        interact with fellow learners, and gain valuable skills through practical and interactive
                        lessons.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <div className="relative w-full md:w-1/2 h-64 rounded-lg overflow-hidden">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/for%20essay-Dfs7634TkmHJiGOIiNt32WU3MrdIv7.png"
                                alt="For Essay"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black bg-opacity-40">
                                <h3 className="text-2xl font-bold text-white">FOR ESSAY</h3>
                                <button
                                    className="w-full py-2 px-4 bg-white bg-opacity-20 rounded-full text-white border border-white hover:bg-opacity-30 transition duration-300">
                                    Upload Essay
                                </button>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/2 h-64 rounded-lg overflow-hidden">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/for%20curriculum%20vitae-hLPGx8fzdctRpp7jLSHeFXVXf8E84M.png"
                                alt="For Curriculum Vitae"
                                layout="fill"
                                objectFit="cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black bg-opacity-40">
                                <h3 className="text-2xl font-bold text-white">FOR CURRICULUM VITAE</h3>
                                <button
                                    className="w-full py-2 px-4 bg-white bg-opacity-20 rounded-full text-white border border-white hover:bg-opacity-30 transition duration-300">
                                    Upload CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Section 5*/}
            <section className="bg-[#1b4e6b] w-full py-16">
                <div className="bg-[#1b4e6b] text-white p-8 md:p-16">
                    <div className="max-w-7xl mx-auto space-y-12">
                        {/* Expert Mentor Section */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2 space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Study with expert mentor, <span className="text-yellow-400">you can do with Candidate Collage Class</span>
                                </h2>
                                <p className="text-gray-300">
                                    With LearnEase, the virtual classroom experience is elevated to match every aspect
                                    of a physical classroom.
                                </p>
                                <p className="text-gray-300">
                                    From engaging interactions with expert instructors and collaborative discussions
                                    with peers to hands-on projects and personalized learning paths.
                                </p>
                                <button
                                    className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition duration-300">
                                    Learn more
                                </button>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="bg-yellow-400 absolute -top-4 -right-4 w-full h-full rounded-3xl"></div>
                                <div className="bg-white relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/study%20with%20expert-KxQ2NoGQI6fA6HjypmWIcTvpgd0pGD.png"
                                        alt="Expert mentor teaching in a classroom"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div
                                            className="w-16 h-16 bg-blue-500 bg-opacity-75 rounded-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke="currentColor" className="w-8 h-8 text-white">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI Interview Section */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="md:w-1/2 space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    A <span className="text-yellow-400">user interview</span> with AI to traning you!
                                </h2>
                                <ul className="space-y-4">
                                    {[1, 2, 3].map((item) => (
                                        <li key={item} className="flex items-center gap-4">
                                            <div className="bg-white p-2 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     stroke="currentColor" className="w-6 h-6 text-blue-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                                                </svg>
                                            </div>
                                            <span>Notes before conducting an interview</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="bg-purple-500 absolute -top-4 -left-4 w-full h-full rounded-3xl"></div>
                                <div className="bg-gray-200 relative rounded-3xl overflow-hidden p-4">
                                    <Image
                                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user%20interview-9tO4e3mdV2qsGOUjrBhELN20C5WQ5f.png"
                                        alt="AI Interview interface showing multiple participants in a video call"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto rounded-2xl"
                                    />
                                    <div className="absolute bottom-8 left-8 flex gap-2">
                                        <button
                                            className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">Present
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                            </svg>
                                            Call
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*Section 6*/}

            {/*Section 7*/}
            <section className="bg-[#1b4e6b] text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-yellow-400">Tools For Studying</span>
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
                            material for scholarships
                        </h3>
                        <p className="mb-8 text-gray-300">
                            Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.
                        </p>
                        <button
                            className="bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-[#1e3a5f] font-semibold py-2 px-6 border border-yellow-400 hover:border-transparent rounded-full transition duration-300">
                            See more features
                        </button>
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 relative">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tools%20for%20studying-ITGYZe66CegcwtlrbjEvKEGsfv2kB5.png"
                            alt="Student with study tools"
                            width={500}
                            height={500}
                            className="z-10 relative"
                        />
                        <div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500 rounded-full opacity-50 blur-3xl"></div>
                        <div
                            className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-50 blur-xl"></div>
                        <div
                            className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-50 blur-xl"></div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
                <div
                    className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400 rounded-full opacity-10 blur-3xl"></div>
            </section>


            {/*Section 8*/}

            <section className="bg-[#1b4e6b] text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Ask questions about scholarships */}
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ask%20question%20about%20AI-UwmoK4NratsbO4nBUqpW2koewbl16p.png"
                                alt="Question about London"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Ask questions about scholarships With <span className="text-yellow-400">Chat AI.</span>
                            </h2>
                            <p className="text-gray-300">
                                Easily launch live assignments, quizzes, and tests. Student results are automatically
                                entered in the online gradebook.
                            </p>
                            <button
                                className="bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-[#1e3a5f] font-semibold py-2 px-6 border border-yellow-400 hover:border-transparent rounded-full transition duration-300">
                                See more features
                            </button>
                        </div>
                    </div>

                    {/* Study Together */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="md:w-1/2">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Study%20Club-JMhDA4WYqclDkNtiOXvwyc3CNsQyKJ.png"
                                alt="Study Club interface"
                                width={400}
                                height={300}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Study Together at <span className="text-yellow-400">Study Club Candidate Collage</span>
                            </h2>
                            <p className="text-gray-300">
                                Class provides tools to help run and manage the class such as Class Roster, Attendance,
                                and more. With the Gradebook, teachers can review and grade tests and quizzes in
                                real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*section 9*/}

            {/*Section 10 */}
            <section className="bg-[#1b4e6b] text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <p className="text-sm uppercase tracking-wider mb-2">Template document</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Complete your scholarship files easily <br/>
                            with <span className="text-yellow-400">Template Dokument</span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Schoology has every tool your classroom needs and comes
                            pre-integrated with more than 200+ tools, student
                            information systems (SIS), and education platforms.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
                        {integrations.map((integration) => (
                            <div key={integration.name} className="w-24 h-24 flex items-center justify-center">
                                <Image
                                    src={integration.image}
                                    alt={`${integration.name} logo`}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            className="bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-[#1e3a5f] font-semibold py-2 px-6 border border-yellow-400 hover:border-transparent rounded-full transition duration-300">
                            See All Integrations
                        </button>
                    </div>
                </div>
            </section>
            {/*Section 11 */}
            <section className="bg-[#1b4e6b] text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                List of Essays That Have <br/>
                                <span className="text-yellow-400">Passed Scholarships!</span>
                            </h2>
                            <p className="text-gray-300">
                                LearnEase has got more than 100k positive ratings from our users around the world.
                            </p>
                            <p className="text-gray-300">
                                Some of the students and teachers were greatly helped by the LearnEase.
                            </p>
                            <button
                                className="bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-[#1e3a5f] font-semibold py-2 px-6 border border-yellow-400 hover:border-transparent rounded-full transition duration-300 flex items-center">
                                See Essay
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20"
                                     fill="currentColor">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </div>
                        <div className="md:w-1/2 relative">
                            <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gloria%20rose2-Ozl5vFOPmBzuf1MLAeT9AEdm27SDBi.png"
                                alt="Gloria Rose holding folders"
                                width={500}
                                height={600}
                                className="rounded-lg"
                            />
                            {/*<div*/}
                            {/*    className="absolute bottom-4 left-4 right-4 bg-white text-gray-800 p-4 rounded-lg shadow-lg">*/}
                            {/*    <p className="text-sm mb-2">*/}
                            {/*        "Thank you so much for your help. It's exactly what I've been looking for. You won't*/}
                            {/*        regret it. It really saves me time and effort. LearnEase is exactly what our*/}
                            {/*        business has been lacking."*/}
                            {/*    </p>*/}
                            {/*    /!*<div className="flex items-center justify-between">*!/*/}
                            {/*    /!*    <span className="font-semibold">Gloria Rose</span>*!/*/}
                            {/*    /!*    <div className="flex items-center">*!/*/}
                            {/*    /!*        {[...Array(5)].map((_, i) => (*!/*/}
                            {/*    /!*            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor"*!/*/}
                            {/*    /!*                 viewBox="0 0 20 20">*!/*/}
                            {/*    /!*                <path*!/*/}
                            {/*    /!*                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>*!/*/}
                            {/*    /!*            </svg>*!/*/}
                            {/*    /!*        ))}*!/*/}
                            {/*    /!*    </div>*!/*/}
                            {/*    /!*</div>*!/*/}
                            {/*    <p className="text-xs text-gray-500 mt-1">12 reviews at Yelp</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </section>


            {/* Footer */}
            x
        </main>
    );
};

function PackageCard({imageSrc, packetNumber, price, features, overlayText}) {
    return (
        <div className="bg-white text-blue-900 rounded-lg overflow-hidden shadow-lg w-full md:w-80">
            <div className="relative h-48">
                <Image
                    src={imageSrc}
                    alt={`Scholarship package ${packetNumber}`}
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-yellow-400 bg-opacity-90 p-4 flex items-center">
                    <p className="text-blue-900 font-bold text-lg">{overlayText}</p>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Packet {packetNumber}</h3>
                <p className="text-2xl font-bold mb-4">{price}</p>
                <ul className="space-y-2 mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M5 13l4 4L19 7"></path>
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button
                    className="w-full bg-yellow-400 text-blue-900 py-2 px-4 rounded-md font-semibold hover:bg-yellow-500 transition duration-300">
                    Packet Detail
                </button>
            </div>
        </div>
    )
}


const integrations = [
    {
        name: 'OneDrive',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Drive-cmeYmGvU8lEzwfBztXMnbUDiDSYqRS.png'
    },
    {
        name: 'Google Drive',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google%20Drive-kGriZUasfb5zKW8bUbDQq8Igtixs8B.png'
    },
    {
        name: 'Dropbox',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dropbox-LCE8RSwrBZhwMi3in68DrDkaWXoHtM.png'
    },
    {
        name: 'Microsoft Teams',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Microsoft%20texs-ZzkMTinc2YMl5XShrHcJVD0munwF35.png'
    },
]

export default mentoring;

