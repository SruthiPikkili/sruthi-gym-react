import React from 'react';
// import Plans from '../Plans';
import Plans from './Plans';
function PlansData() {


    return (
        


            <div className='d-flex justify-content-between p-3 bg-dark' >

                
                <Plans plan={'BASIC'}
                    subtitle={'Membership includes:'}
                    duration={'One month'}
                    price={'RS 3000'}
                    features={[
                        '- Strength and cardio Machines', '- Free Personal training', '- Locker and Shower Facilities'

                    ]}
                />
                <Plans plan={'PREMIUM'}
                    subtitle={'Membership includes:'}
                    duration={'Six months'}
                    price={'RS 8000'}
                    features={[
                        '- Strength and cardio Machines', '- Free Personal training', '- Locker and Shower Facilities', '- Discounts on Drinks & Supplements', '- Yoga Classes'

                    ]}
                />

                <Plans plan={'PRO'}
                    subtitle={'Membership includes:'}
                    duration={'12 months'}
                    price={'RS 15000'}
                    features={[
                        '- Strength and cardio Machines', '- Free Personal training', '- Locker and Shower Facilities', '- Discounts on Drinks & Supplements', '- Yoga Classes',
                        '- Hydro Massage Beds', '- Group Fitness Classes'

                    ]}
                />
            </div>
        
    );
}

export default PlansData;
