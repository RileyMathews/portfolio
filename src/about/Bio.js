import React, { Component } from 'react'
import { Content } from '../../node_modules/bloomer/lib/elements/Content';


class Bio extends Component {


    render() {
        return (
            <React.Fragment>
                <Content>
                    <p>I am a professional musician turned programmer currently learning professional software development at Nashville Software School. I’ve been poking around with programming since high school, but studying music technology at Belmont got me interested enough to start diving deeper into the world of software development. I’ve learned so much already, and i’m looking forward to see what comes next in this exciting journey.</p>

                    <p>During this new adventure, I have explored many new concepts, but it has also reinforced aspects I loved about my previous work in musical performance. I have always loved the idea of efficiency. In music it was finding the best techniques to play my instruments effectively. In code, it is the many techniques that make writing code faster, and more effective through ideas such as DRY coding, and modularization.</p>

                    <p>I have always loved learning. It seems like every year i’m trying out some new instrument I haven’t touched before. Digging through the endless possibilities of new techniques to learn in programming has been a fun journey through me. As every day I learn about new platforms, new frameworks, or just new ways to write the same old coding principles. I can’t wait to see where this journey leads me next as I search for new professional opportunities in the programming world.</p>
                </Content>
            </React.Fragment>
        )
    }

}


export default Bio
