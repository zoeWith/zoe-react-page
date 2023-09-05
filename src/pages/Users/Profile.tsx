import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Profile'));
    });

    return (
        <div>
            <ul className="flex space-x-2">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Users
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2">
                    <span>Profile</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
