import React from 'react';
import classes from './ProfileInfo.module.css';
import avatar from './../../../img/avatar.jpg';
import building from './../../../img/building.jpg';

const ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.profileInfo}>
                <img src={avatar} className={classes.profileLogo} />
                <p className={classes.profileName}>Ludwig Mies van der Rohe</p>                
                <div className={classes.profileText}>
                    <p>Magnis ac sociosqu sollicitudin platea sapien a, fames. Lacinia, sagittis ac praesent velit aptent cras risus nisl pretium tempus amet pellentesque sit aliquet nisl.</p>
                    <p>Ligula odio nisl laoreet et, curae; lectus nibh. Torquent sagittis interdum. Hymenaeos eros nullam pharetra curae; malesuada placerat Tortor penatibus ridiculus luctus mauris dis tortor. Varius vivamus aptent sociis lobortis.</p>

                    <p>Per, velit senectus magna. Bibendum. Urna purus porttitor facilisis dolor amet diam. Hac quis dictum montes. Vivamus. Mollis lobortis ac nunc orci lacus imperdiet etiam turpis auctor Curae; per laoreet pede commodo. Molestie sollicitudin, cras maecenas. Ipsum taciti habitant magna nibh fames erat quis rhoncus cum.
Suscipit magna mollis maecenas, litora. Eros mi. Elementum per Duis rhoncus eget nunc. Sagittis augue. Ut. Justo velit velit proin laoreet vitae augue aliquet morbi lacinia rutrum nonummy pulvinar id suscipit convallis. Platea praesent iaculis imperdiet rhoncus.</p>
                </div>
            </div>
            <div className={classes.imgs}>
                <img src={building} />
            </div>
        </div>
    );
}

export default ProfileInfo;
