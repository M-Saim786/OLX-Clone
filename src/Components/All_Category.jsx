import React, { useEffect, useState } from 'react'
import './All_Category.css'
import { onValue, ref } from 'firebase/database'
import { db } from '../Config/Firebase'
function All_Category() {
    const [CategoryArr, setCategoryArr] = useState([])
    useEffect(() => {
        const dbref = ref(db, 'SubCategory')
        onValue(dbref, (snapShot) => {
            let data = snapShot.val()
            if (data!==null) {
                setCategoryArr(Object.values(data))
                
            }
            else{
                console.log('Category')
            }
        })
    }, [])

    return (
        <>
            <div className="All_Category">
                <h2>All categories</h2>

                <div className="categories">
                    <ul>
                        {CategoryArr !== null ?
                            CategoryArr.map((category, i) => {
                                return (
                                    <>
                                        <li key={i}>
                                            <img src={category.Sub_Category_Img} alt="" />
                                            <span>
                                                {category.Sub_Category}
                                            </span>

                                        </li>
                                    </>
                                )
                            })
                            : alert("No categories")

                        }
                    </ul>
                </div>


            </div>
        </>
    )
}

export default All_Category
