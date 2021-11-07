import React from "react";
import c from "./ProfileDescription.module.scss";
import {Contact} from "../ProfileInfo";
import {Tabs} from 'antd';


const {TabPane} = Tabs;

export const ProfileDescription = (
    {
        profile
    }
) => {
    return (
        <div className={c.description}>
            <div className={c.fullName}>
                {profile.fullName}
            </div>
            <Tabs defaultActiveKey="aboutMe">
                <TabPane tab="About me" key="aboutMe">
                    <p>
                        {profile.aboutMe}
                    </p>
                </TabPane>
                <TabPane tab="Job description" key="lookingForAJob">
                    <p>
                        {
                            profile.lookingForAJob
                                ? `Looking for a job!`
                                : `Not looking for a job!`
                        }
                    </p>
                    <p>
                        {profile.lookingForAJobDescription}
                    </p>
                </TabPane>
                <TabPane tab="Contacts" key="contacts">
                    {
                        Object.keys(profile.contacts).map(key => profile.contacts[key] &&
                            <Contact
                                key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key]}
                            />
                        )
                    }
                </TabPane>
            </Tabs>

            {/*<div>*/}
            {/*    <b>About me</b>: {profile.aboutMe}*/}
            {/*</div>*/}
            {/*<div className={c.jobSearch}>*/}
            {/*    <b>Looking for a*/}
            {/*        job</b>: {profile.lookingForAJob ? "I'm looking for a job!" : "I'm NOT looking for a job!"}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <b>Looking for a job*/}
            {/*        description</b>: {profile.lookingForAJobDescription}*/}
            {/*</div>*/}
            {/*<div className={c.contacts}>*/}
            {/*    <b>Contacts</b>: {*/}
            {/*    Object.keys(profile.contacts).map(key => profile.contacts[key] && <Contact*/}
            {/*            key={key}*/}
            {/*            contactTitle={key}*/}
            {/*            contactValue={profile.contacts[key]}*/}
            {/*        />*/}
            {/*    )*/}
            {/*}*/}
            {/*</div>*/}
        </div>
    )
}
