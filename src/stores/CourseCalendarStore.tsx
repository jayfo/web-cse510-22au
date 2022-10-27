import * as React from 'react';

import { DateTime } from 'luxon';

import Reading from '../types/Reading';

import ContentAvailableExam from '../content/calendar/AvailableExam.mdx';
import ContentContributionsInHCI from '../content/calendar/ContributionsInHCI.mdx';
import ContentDueExam from '../content/calendar/DueExam.mdx';
import ContentDueProjectFinalReport from '../content/calendar/DueProjectFinalReport.mdx';
import ContentDueStatisticsLab from '../content/calendar/DueStatisticsLab.mdx';
import ContentExperimentalDesignAndAnalysis from '../content/calendar/ExperimentalDesignAndAnalysis.mdx';
import ContentNoReading from '../content/calendar/NoReading.mdx';
import ContentProjectMilestone from '../content/calendar/ProjectMilestone.mdx';
import ContentProjectProposal from '../content/calendar/ProjectProposal.mdx';
import ContentVisionsOfHCI from '../content/calendar/VisionsOfHCI.mdx';

type CalendarDateBase = {
    date: DateTime,
    dateTitle: string,
    virtual?: boolean,
    awayJames?: boolean,
    guest?: {
        name: string,
        link: string,
    }
    additionalResources?: Reading[],
}

type CalendarDateContentStandard = CalendarDateBase & {
    readingsStandard: {
        framing: Reading,
        instances: Reading[],
    }
}

type CalendarDateContentNonstandard = CalendarDateBase & {
    contentNonstandard: React.ReactNode,
}

export type CalendarDate = CalendarDateBase | CalendarDateContentStandard | CalendarDateContentNonstandard;

export class CourseCalendarStore {
    calendarDates: CalendarDate[] = [
        //
        // Week 1
        //
        {
            date: DateTime.fromISO('2022-09-29'),

            dateTitle: 'Introductions and Overview',
            contentNonstandard: <ContentNoReading />,
        },

        //
        // Week 2
        //
        {
            date: DateTime.fromISO('2022-10-04'),

            dateTitle: 'Human-Computer Interaction History',
            contentNonstandard: <ContentNoReading />,
            additionalResources: [
                {
                    authorText: 'Jonathan Grudin',
                    title: 'A Moving Target - The Evolution of Human-Computer Interaction',
                    publicationText: 'Book Chapter',
                    link: 'https://canvas.uw.edu/files/95749979/'
                }
            ]
        },
        {
            date: DateTime.fromISO('2022-10-06'),

            dateTitle: 'Visions of Human-Computer Interaction',
            contentNonstandard: <ContentVisionsOfHCI readings={
                [
                    {
                        // Because this paper is reviewed in history discussion,
                        // text below clarifies it can be read but will not be presented
                        authorText: 'Vannevar Bush',
                        title: 'As We May Think',
                        publicationText: 'The Atlantic, 1945',
                        link: 'https://theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/'
                    },
                    {
                        authorText: 'Mark Weiser',
                        title: 'The Computer for the 21st Century',
                        publicationText: 'Scientific American, 1991',
                        link: 'https://canvas.uw.edu/files/95749946/'
                    },
                    {
                        authorText: 'Roy Want, Andy Hopper, Veronica Falcão, Jonathan Gibbons',
                        title: 'The Active Badge Location System',
                        publicationText: 'TOIS 1992',
                        link: 'https://canvas.uw.edu/files/95749944/'
                    },
                    {
                        authorText: 'James D. Hollan, Scott Stornetta',
                        title: 'Beyond Being There',
                        publicationText: 'CHI 1992',
                        link: 'https://canvas.uw.edu/files/95749938/'
                    },
                    {
                        authorText: 'Pierre Wellner',
                        title: 'Interacting with Paper on the DigitalDesk',
                        publicationText: 'CACM 1993',
                        link: 'https://canvas.uw.edu/files/95749947/'
                    },
                    {
                        authorText: 'Benjamin B. Bederson, James D. Hollan',
                        title: 'Pad++: A Zooming Graphical Interface for Exploring Alternate Interface Physics',
                        publicationText: 'UIST 1994',
                        link: 'https://canvas.uw.edu/files/95749934/'
                    },
                    {
                        authorText: 'Hiroshi Ishii, Brygg Ullmer',
                        title: 'Tangible Bits: Towards Seamless Interfaces between People, Bits and Atoms',
                        publicationText: 'CHI 1997',
                        link: 'https://canvas.uw.edu/files/95749940/'
                    },
                    {
                        authorText: 'Eric Horvitz',
                        title: 'Principles of Mixed-Initiative User Interfaces',
                        publicationText: 'CHI 1999',
                        link: 'https://canvas.uw.edu/files/95749939/'
                    },
                    {
                        authorText: 'Ken Hinckley, Jeff Pierce, Mike Sinclair, Eric Horvitz',
                        title: 'Sensing Techniques for Mobile Interaction',
                        publicationText: 'UIST 2000',
                        link: 'https://canvas.uw.edu/files/95749937/'
                    },
                    {
                        authorText: 'Claudio S. Pinhanez',
                        title: 'The Everywhere Displays Projector: A Device to Create Ubiquitous Graphical Interfaces',
                        publicationText: 'UbiComp 2001',
                        link: 'https://canvas.uw.edu/files/95749943/'
                    },
                    {
                        authorText: 'Saul Greenberg, Chester Fitchett',
                        title: 'Phidgets: Easy Development of Physical Interfaces through Physical Widgets',
                        publicationText: 'UIST 2001',
                        link: 'https://canvas.uw.edu/files/95749936/'
                    },
                    {
                        authorText: 'Roy Want, Trevor Pering, Gunner Danneels, Muthu Kumar, Murali Sundar, John Light',
                        title: 'The Personal Server: Changing the Way We Think about Ubiquitous Computing',
                        publicationText: 'UbiComp 2002',
                        link: 'https://canvas.uw.edu/files/95749945/'
                    },
                    {
                        authorText: 'Jonathan Lester, Tanzeem Choudhury, Gaetano Borriello',
                        title: 'A Practical Approach to Recognizing Physical Activities',
                        publicationText: 'Pervasive 2006',
                        link: 'https://canvas.uw.edu/files/95749942/'
                    },
                    {
                        authorText: 'Bret Victor',
                        title: 'Magic Ink: Information Software and the Graphical Interface',
                        publicationText: '2006',
                        link: 'http://worrydream.com/MagicInk/'
                    },
                ]
            }/>,
        },

        //
        // Week 3
        //
        {
            date: DateTime.fromISO('2022-10-11'),

            dateTitle: 'Contributions in Human-Computer Interaction',
            contentNonstandard: <ContentContributionsInHCI readings={
                {
                    framing: {
                        authorText: 'Jacob O. Wobbrock, Julie A. Kientz',
                        title: 'Research Contributions in Human-Computer Interaction',
                        publicationText: 'Interactions, 2016',
                        link: 'https://canvas.uw.edu/files/95749890/'
                    },
                    contributions: {
                        'Empirical': [
                            {
                                authorText: 'Claudia Daudén Roquet, Nikki Theofanopoulou, Jaimie L Freeman, Jessica Schleider, James J Gross, Katie Davis, Ellen Townsend, Petr Slovak',
                                title: 'Exploring Situated & Embodied Support for Youth’s Mental Health: Design Opportunities for Interactive Tangible Device',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502135'
                            },
                            {
                                authorText: 'André Rodrigues, Hugo Nicolau, André Santos, Diogo Branco, Jay Rainey, David Verweij, Jan David Smeddinck, Kyle Montague, Tiago Guerreiro',
                                title: 'Investigating the Tradeoffs of Everyday Text-Entry Collection Methods',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3501908'
                            },
                            {
                                authorText: 'Carla F. Griggio, Midas Nouwens, Clemens Nylandsted Klokmose',
                                title: 'Caught in the Network: The Impact of WhatsApp’s 2021 Privacy Policy Update on Users’ Messaging App Ecosystems',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502032'
                            },
                            
                        ],
                        'Artifact': [
                            {
                                authorText: 'Vivian Shen, Craig Shultz, Chris Harrison',
                                title: 'Mouth Haptics in VR using a Headset Ultrasound Phased Array',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3501960'
                            },
                            {
                                authorText: 'Colin Barry, Jessica de Souza, Yinan Xuan, Jason Holden, Eric Granholm, Edward Jay Wang',
                                title: 'At-Home Pupillometry using Smartphone Facial Identification Cameras',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502493'
                            },
                            {
                                authorText: 'Mitchell L. Gordon, Michelle S. Lam, Joon Sung Park, Kayur Patel, Jeff Hancock, Tatsunori Hashimoto, Michael S. Bernstein',
                                title: 'Jury Learning: Integrating Dissenting Voices into Machine Learning Models',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502004'
                            },
                        ],
                        'Methodological': [
                            {
                                authorText: 'Theophanis Tsandilas and Pierre Dragicevic',
                                title: 'Gesture Elicitation as a Computational Optimization Problem',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3501942'
                            },
                            {
                                authorText: 'Haotian Li, Yong Wang, Aoyu Wu, Huan Wei, Huamin Qu',
                                title: 'Structure-Aware Visualization Retrieval',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/10.1145/3491102.3502048'
                            },
                            {
                                authorText: 'Lisa A. Elkin, Matthew Kay, James J. Higgins, Jacob O. Wobbrock',
                                title: 'An Aligned Rank Transform Procedure for Multifactor Contrast Tests',
                                publicationText: 'UIST 2021', // Lisa being sneaky
                                link: 'https://dl.acm.org/doi/abs/10.1145/3472749.3474784'
                            },
                        ],
                        'Theoretical': [
                            {
                                authorText: 'Miguel A. Renom, Baptiste Caramiaux, Michel Beaudouin-Lafon',
                                title: 'Exploring Technical Reasoning in Digital Tool Use',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3501877'
                            },
                            {
                                authorText: 'Antti Oulasvirta, Jussi P. P. Jokinen, Andrew Howes',
                                title: 'Computational Rationality as a Theory of Interaction',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3517739'
                            },
                        ],
                        'Benchmark / Dataset': [
                            {
                                authorText: 'Mina Lee, Percy Liang, Qian Yang',
                                title: 'CoAuthor: Designing a Human-AI Collaborative Writing Dataset for Exploring Language Model Capabilities',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502030'
                            },
                            {
                                authorText: 'Vinoth Pandian Sermuga Pandian, Abdullah Shams, Sarah Suleri, Prof. Dr. Matthias Jarke',
                                title: 'LoFi Sketch: A Large Scale Dataset of Smartphone Low Fidelity Sketches',
                                publicationText: 'CHI EA 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491101.3519624'
                            },
                            {
                                authorText: 'Raymond Fok, Mingyuan Zhong, Anne Spencer Ross, James Fogarty, and Jacob O. Wobbrock',
                                title: 'A Large-Scale Longitudinal Analysis of Missing Label Accessibility Failures in Android Apps',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502143' // James be sneaky too
                            },
                        ],
                        'Survey': [
                            {
                                authorText: 'Katta Spiel, Eva Hornecker, Rua Mae Williams, Judith Good',
                                title: 'ADHD and Technology Research – Investigated by Neurodivergent Readers',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3517592'
                            },
                            {
                                authorText: 'Ryo Suzuki, Adnan Karim, Tian Xia, Hooman Hedayati, Nicolai Marquardt',
                                title: 'Augmented Reality and Robotics: A Survey and Taxonomy for AR-enhanced Human-Robot Interaction and Robotic Interfaces',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3517719'
                            },
                        ],
                        'Opinion': [
                            {
                                authorText: 'Sandy J. J. Gould',
                                title: 'Consumption Experiences in the Research Process',
                                publicationText: 'CHI 2022',
                                link: 'https://dl.acm.org/doi/abs/10.1145/3491102.3502001'
                            },
                            {
                                authorText: 'Radu-Daniel Vatavu',
                                title: 'Are Ambient Intelligence and Augmented Reality Two Sides of the Same Coin? Implications for Human-Computer Interaction',
                                publicationText: 'CHI EA 2022',
                                link: 'https://dl.acm.org/doi/10.1145/3491101.3519710'
                            },
                        ],
                    }
                }
            } />,
            additionalResources: [
                {
                    authorText: 'Herbert A. Simon',
                    title: 'The Science of Design: Creating the Artificial',
                    publicationText: 'Design Issues, 1988',
                    link: 'https://canvas.uw.edu/files/95727723/'
                },
                {
                    authorText: 'Donald E. Stokes',
                    title: 'Pasteur’s Quadrant: Basic Science and Technological Innovation',
                    publicationText: 'Book Chapter, 1997',
                    link: 'https://canvas.uw.edu/files/95727722/'
                },
            ]
        },
        {
            date: DateTime.fromISO('2022-10-13'),

            dateTitle: 'In-Class Finalization of Project Proposals',
            contentNonstandard: <ContentNoReading />,
        },
        {
            date: DateTime.fromISO('2022-10-14'),

            dateTitle: 'Project Proposal Due',
            contentNonstandard: <ContentProjectProposal />,
        },

        //
        // Week 4
        //
        {
            date: DateTime.fromISO('2022-10-18'),

            dateTitle: 'Usability Evaluation Considered Harmful',
            readingsStandard: {
                framing: {
                    authorText: 'Saul Greenberg, Bill Buxton',
                    title: 'Usability Evaluation Considered Harmful (Some of the Time)',
                    publicationText: 'CHI 2008',
                    link: 'https://canvas.uw.edu/files/95749960/'
                },
                instances: [
                    {
                        authorText: 'Dan R. Olsen, Jr',
                        title: 'Evaluating User Interface Systems Research',
                        publicationText: 'UIST 2007',
                        link: 'https://canvas.uw.edu/files/95749961/'
                    },
                    {
                        authorText: 'James Fogarty',
                        title: 'Code and Contribution in Interactive Systems Research',
                        publicationText: 'CHI 2017 Workshop on #HCI.Tools: Strategies and Best Practices for Designing, Evaluating, and Sharing Technical HCI Toolkits',
                        link: 'https://canvas.uw.edu/files/95749959/'
                    }
                ]
            },
        },
        {
            date: DateTime.fromISO('2022-10-20'),
            dateTitle: 'Research Topic: Design Tools',
            readingsStandard: {
                framing: {
                    authorText: 'Mark W. Newman, James Lin, Jason I. Hong, James A. Landay',
                    title: 'DENIM: An Informal Web Site Design Tool Inspired by Observations of Practice',
                    publicationText: 'HCI, 2003',
                    link: 'https://canvas.uw.edu/files/96219366/'
                },
                instances: [
                    {
                        authorText: 'Steven P. Dow, Alana Glassco, Jonathan Kass, Melissa Schwarz, Daniel L. Schwartz, Scott R. Klemmer',
                        title: 'Parallel Prototyping Leads to Better Design Results, More Divergence, and Increased Self-Efficacy',
                        publicationText: 'TOCHI, 2010',
                        link: 'https://canvas.uw.edu/files/96219360/'
                    },
                    {
                        authorText: 'Stefanie Mueller, Sangha Im, Serafima Gurevich, Alexander Teibrich, Lisa Pfisterer, François Guimbretière, Patrick Baudisch',
                        title: 'WirePrint: 3D Printed Previews for Fast Prototyping',
                        publicationText: 'UIST 2014',
                        link: 'https://canvas.uw.edu/files/96219363/'
                    }
                ]
            },
        },

        //
        // Week 5
        //
        {
            date: DateTime.fromISO('2022-10-25'),
            dateTitle: 'Research Topic: CSCW and Social Computing',
            guest: {
                name: 'Benjamin Mako Hill',
                link: 'https://mako.cc/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Mark S. Ackerman',
                    title: 'The Intellectual Challenge of CSCW: The Gap Between Social Requirements and Technical Feasibility',
                    publicationText: 'HCI 2000',
                    link: 'https://canvas.uw.edu/files/96219383/'
                },
                instances: [
                    {
                        authorText: 'Aaron Halfaker, R. Stuart Geiger, Jonathan T. Morgan, John Riedl',
                        title: 'The Rise and Decline of an Open Collaboration System: How Wikipedia’s Reaction to Popularity Is Causing Its Decline',
                        publicationText: 'American Behavioral Scientist 2012',
                        link: 'https://canvas.uw.edu/files/96219384/'
                    },
                    {
                        authorText: 'Sneha Narayan, Jake Orlowitz, Jonathan T Morgan, Benjamin Mako Hill, Aaron Shaw',
                        title: 'The Wikipedia Adventure: Field Evaluation of an Interactive Tutorial for New Users',
                        publicationText: 'CSCW 2017',
                        link: 'https://canvas.uw.edu/files/96219386/'
                    }
                ]
            },
            additionalResources: [
                {
                    authorText: 'P. J. Resnick, Neophytos Iacovou, Mitesh Suchak, Pete Bergstrom, John Riedl',
                    title: 'GroupLens: An Open Architecture for Collaborative Filtering of Netnews',
                    publicationText: 'CSCW 1994',
                    link: 'https://canvas.uw.edu/files/96219387/'
                },

            ],
        },
        {
            date: DateTime.fromISO('2022-10-27'),
            dateTitle: 'Experimental Design and Analysis',
            contentNonstandard: <ContentExperimentalDesignAndAnalysis />,
        },

        //
        // Week 6
        //
        {
            date: DateTime.fromISO('2022-11-01'),
            dateTitle: 'Research Topic: Accessibility',
            guest: {
                name: 'Martez Mott',
                link: 'http://www.martezmott.com/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Jacob O. Wobbrock, Krzysztof Z. Gajos, Shaun K. Kane, Gregg C. Vanderheiden',
                    title: 'Ability-Based Design',
                    publicationText: 'CACM, 2018',
                    link: 'https://canvas.uw.edu/files/97061383/'
                },
                instances: [
                    {
                        authorText: 'Martez E. Mott, Radu-Daniel Vatavu, Shaun K. Kane, Jacob O. Wobbrock',
                        title: 'Smart Touch: Improving Touch Accuracy for People with Motor Impairments with Template Matching',
                        publicationText: 'CHI 2016',
                        link: 'https://canvas.uw.edu/files/97061381/'
                    },
                    {
                        authorText: 'Rachel L. Franz, Sasa Junuzovic, Martez Mott',
                        title: 'Nearmi: A Framework for Designing Point of Interest Techniques for VR Users with Limited Mobility',
                        publicationText: 'ASSETS 2021',
                        link: 'https://canvas.uw.edu/files/97061380/'
                    },
                ],
            },
        },
        {
            date: DateTime.fromISO('2022-11-03'),
            dateTitle: 'Research Topic: Interaction with Machine Learning',
            guest: {
                name: 'Kayur Patel',
                link: 'http://www.kayur.org/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Austin P. Wright, Zijie J. Wang, Haekyu Park, Grace Guo, Fabian Sperrle, Mennatallah El-Assady, Alex Endert, Daniel Keim, Duen Horng (Polo) Chau',
                    title: 'A Comparative Analysis of Industry Human-AI Interaction Guidelines',
                    publicationText: 'IEEE VIS 2020 Workshop on Trust and Expertise in Visual Analytics (TREX)',
                    link: 'https://canvas.uw.edu/files/97063527/'
                },
                instances: [
                    {
                        authorText: 'Kayur Patel, Naomi Bancroft, Steven M. Drucker, James Fogarty, Amy J. Ko, and James Landay',
                        title: 'Gestalt: Integrated Support for Implementation and Analysis in Machine Learning',
                        publicationText: 'UIST 2010',
                        link: 'https://canvas.uw.edu/files/97063526/'
                    },
                    {
                        authorText: 'Mitchell L. Gordon, Michelle S. Lam, Joon Sung Park, Kayur Patel, Jeff Hancock, Tatsunori Hashimoto, and Michael S. Bernstein',
                        title: 'Jury Learning: Integrating Dissenting Voices into Machine Learning Models',
                        publicationText: 'CHI 2022',
                        link: 'https://canvas.uw.edu/files/97063525/'
                    },
                ],
            },
            additionalResources: [
                {
                    authorText: 'Apple',
                    title: 'Machine Learning - Human Interface Guidelines',
                    link: 'https://developer.apple.com/design/human-interface-guidelines/technologies/machine-learning/introduction/'
                },
                {
                    authorText: 'Google',
                    title: 'Patterns - People + AI Guidebook',
                    link: 'https://pair.withgoogle.com/guidebook/patterns'
                },
                {
                    authorText: 'Microsoft',
                    title: 'Guidelines for Human-AI Interaction',
                    link: 'https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/'
                },
            ],
        },

        //
        // Week 7
        //
        {
            date: DateTime.fromISO('2022-11-08'),

            dateTitle: 'Project Milestone 1 Presentations',
            contentNonstandard: <ContentProjectMilestone />,
        },
        {
            date: DateTime.fromISO('2022-11-10'),

            dateTitle: 'Project Milestone 1 Presentations',
        },

        //
        // Week 7
        //
        {
            date: DateTime.fromISO('2022-11-15'),
            dateTitle: 'Research Topic: Designing with Children',
            guest: {
                name: 'Jason Yip',
                link: 'http://bigyipper.com/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Allison Druin',
                    title: 'The Role of Children in the Design of New Technology',
                    publicationText: 'Behaviour and Information Technology, 2002',
                    link: 'https://canvas.uw.edu/files/97056150/'
                },
                instances: [
                    {
                        authorText: 'Kung Jin Lee, Wendy Roldan, Tian Qi Zhu, Harkiran Kaur Saluja, Sungmin Na, Britnie Chin, Yilin Zeng, Jin Ha Lee, Jason Yip',
                        title: 'The Show Must Go On: A Conceptual Model of Conducting Synchronous Participatory Design With Children Online',
                        publicationText: 'CHI 2021',
                        link: 'https://canvas.uw.edu/files/97056151/'
                    },
                    {
                        authorText: 'Julia Woodward, Feben Alemu, Natalia E. López Adames, Lisa Anthony, Jason C. Yip, Jaime Ruiz',
                        title: '“It Would Be Cool to Get Stampeded by Dinosaurs”: Analyzing Children’s Conceptual Model of AR Headsets Through Co-Design',
                        publicationText: 'CHI 2022',
                        link: 'https://canvas.uw.edu/files/97056154/'
                    }
                ]
            }
        },
        {
            date: DateTime.fromISO('2022-11-17'),
            dateTitle: 'Research Topic: Computing Education and Learning',
            guest: {
                name: 'Ben Shapiro',
                link: 'https://benshapi.ro/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Andrea A. diSessa, David Hammer, Bruce Sherin, Tina Kolpakowski',
                    title: 'Inventing Graphing: Meta-Representational Expertise in Children',
                    publicationText: 'The Journal of Mathematical Behavior, 1991',
                    link: 'https://canvas.uw.edu/files/97056426/'
                },
                instances: [
                    {
                        authorText: 'Michelle H. Wilkerson-Jerde, Brian E. Gravel, Christopher A. Macrander',
                        title: 'Exploring Shifts in Middle School Learners’ Modeling Activity While Generating Drawings, Animations, and Computational Simulations of Molecular Diffusion',
                        publicationText: 'Journal of Science Education and Technology 2015',
                        link: 'https://canvas.uw.edu/files/97056429/'
                    },
                    {
                        authorText: 'Lila Finch, Celeste Moreno, R. Benjamin Shapiro',
                        title: 'Luminous Science: Teachers Designing For and Developing Transdisciplinary Thinking and Learning',
                        publicationText: 'Cognition and Instruction 2021',
                        link: 'https://canvas.uw.edu/files/97056427/'
                    }
                ]
            }
        },

        //
        // Week 8
        //
        {
            date: DateTime.fromISO('2022-11-22'),
            dateTitle: 'Research Topic: Information and Communication Technologies and Development',
            awayJames: true,
            guest: {
                name: 'Kurtis Heimerl',
                link: 'https://kurti.sh/',
            },
            readingsStandard: {
                framing: {
                    authorText: 'Lilly Irani, Janet Vertesi, Paul Dourish, Kavita Philip, Rebecca E. Grinter',
                    title: 'Postcolonial Computing: A Lens on Design and Development',
                    publicationText: 'CHI 2010',
                    link: 'https://canvas.uw.edu/files/97371692/'
                },
                instances: [
                    {
                        authorText: 'Eric Brewer, Michael Demmer, Melissa Ho, R. J. Honicky, Joyojeet Pal, Madelaine Plauche, Sonesh Surana',
                        title: 'The Challenges of Technology Research for Developing Regions',
                        publicationText: 'IEEE Pervasive Computing, 2006',
                        link: 'https://canvas.uw.edu/files/97371691/'
                    },
                    {
                        authorText: 'Matthew William Johnson, Esther Han Beol Jang, Frankie O\'Rourke, Rachel Ye, Kurtis Heimerl',
                        title: 'Network Capacity as Common Pool Resource: Community-Based Congestion Management in a Community Network',
                        publicationText: 'CSCW 2021',
                        link: 'https://canvas.uw.edu/files/97371693/'
                    }
                ]
            }
        },

        //
        // Statistics Lab Due
        //
        {
            date: DateTime.fromISO('2022-11-23'),

            dateTitle: 'Statistics Lab Due',
            contentNonstandard: <ContentDueStatisticsLab />
        },

        //
        // Week 9
        //
        {
            date: DateTime.fromISO('2022-11-29'),

            dateTitle: 'Project Milestone 2 Presentations',
            contentNonstandard: <ContentProjectMilestone />,
        },
        {
            date: DateTime.fromISO('2022-12-01'),

            dateTitle: 'Project Milestone 2 Presentations',
        },

        //
        // Week 10
        //
        {
            date: DateTime.fromISO('2022-12-06'),
            dateTitle: 'Research Topic: Interface Toolkits',
            readingsStandard: {
                framing: {
                    authorText: 'Brad Myers, Scott E. Hudson, Randy Pausch',
                    title: 'Past, Present, and Future of User Interface Software Tools',
                    publicationText: 'TOCHI 2000',
                    link: 'https://canvas.uw.edu/files/97371695/'
                },
                instances: [
                    {
                        authorText: 'Michael Bostock, Vadim Ogievetsky, Jeffrey Heer',
                        title: 'D3: Data-Driven Documents',
                        publicationText: 'InfoVis 2011',
                        link: 'https://canvas.uw.edu/files/97371695/'
                    },
                    {
                        authorText: 'Morgan Dixon, James Fogarty',
                        title: 'Prefab: Implementing Advanced Behaviors Using Pixel-Based Reverse Engineering of Interface Structure',
                        publicationText: 'CHI 2010',
                        link: 'https://canvas.uw.edu/files/97371696/'
                    }
                ]
            }
        },
        {
            date: DateTime.fromISO('2022-12-08'),
            dateTitle: 'Research Topic: Research through Design',
            guest: {
                name: 'Audrey Desjardins',
                link: 'http://www.audreydesjardins.com/',
            },
            
            readingsStandard: {
                framing: {
                    authorText: 'William Gaver',
                    title: 'What Should We Expect from Research Through Design?',
                    publicationText: 'CHI 2012',
                    link: 'https://canvas.uw.edu/files/95760262/'
                },
                instances: [
                    {
                        authorText: 'William Odom, Ron Wakkary, Youn-kyung Lim, Audrey Desjardins, Bart Hengeveld, Richard Banks',
                        title: 'From Research Prototype to Research Product',
                        publicationText: 'CHI 2016',
                        link: 'https://canvas.uw.edu/files/95760264/'
                    },
                    {
                        authorText: 'Heidi R. Biggs, Audrey Desjardins',
                        title: 'High Water Pants: Designing Embodied Environmental Speculation',
                        publicationText: 'CHI 2020',
                        link: 'https://canvas.uw.edu/files/97022487/'
                    },
                ],
            },
            additionalResources: [
                {
                    authorText: 'Heidi R. Biggs, Audrey Desjardins',
                    title: 'Crafting an Embodied Speculation: An Account of Prototyping Methods',
                    publicationText: 'DIS 2020',
                    link: 'https://canvas.uw.edu/files/95760257/'
                },
                {
                    authorText: 'Heidi Biggs, Cayla Key, Audrey Desjardins, Afroditi Psarra',
                    title: 'Moving Design Research: GIFs as Research Tools',
                    publicationText: 'DIS 2021',
                    link: 'https://canvas.uw.edu/files/95760259/'
                },
            ],
        },

        //
        // Finals Week
        //
        {
            date: DateTime.fromISO('2022-12-09'),

            dateTitle: 'Exam Available',
            contentNonstandard: <ContentAvailableExam />
        },
        {
            date: DateTime.fromISO('2022-12-12'),

            dateTitle: 'Exam Due',
            contentNonstandard: <ContentDueExam />
        },
        {
            date: DateTime.fromISO('2022-12-14'),

            dateTitle: 'Project Final Report Due',
            contentNonstandard: <ContentDueProjectFinalReport />
        },
    ];
}
