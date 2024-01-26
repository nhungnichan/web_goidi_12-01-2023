import React from 'react'
import { CNavItem, CNavTitle } from '@coreui/react'
import { IoNotifications } from "react-icons/io5";
import { FaUser, FaChartBar } from "react-icons/fa";
import { GiTable } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import { MdFeedback } from "react-icons/md";

import {
    cilUser,
} from '@coreui/icons';
const _nav = [
	{
		component: CNavItem,
	},
	{
		component: CNavTitle,
		name: '',
	},
	// {
	// 	component: CNavItem,
	// 	name: 'Home',
	// 	to: '/dashboard',
	// 	icon: <IoIosHome size={24} className="nav-icon" />,
	// },
	// {
	// 	component: CNavItem,
	// 	name: 'Users',
	// 	to: '/user',
	// 	icon: <FaUser size={24} className="nav-icon" />,
	// },
	// {
	// 	component: CNavItem,
	// 	name: 'Notification',
	// 	to: '/notification',
	// 	icon: <IoNotifications size={24} className="nav-icon" />,
	// },
	// {
	// 	component: CNavItem,
	// 	name: 'Revenue',
	// 	to: '/revenue',
	// 	icon: <FaChartBar size={24} className="nav-icon" />,
	// },
	{
		component: CNavItem,
		name: 'Quản lý tài khoản',
		to: '/user',
		icon: <FaUser size={24} className="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'Quản lý món ăn',
		to: '/dish',
		icon: <BiSolidDish size={24} className="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'Quản lý bàn',
		to: '/table',
		icon: <GiTable size={24} className="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'Quản lý feedbacks',
		to: '/feedback',
		icon: <MdFeedback size={24} className="nav-icon" />,
	},
	{
		component: CNavItem,
		name: 'Doanh thu',
		to: '/revenue',
		icon: <MdFeedback size={24} className="nav-icon" />,
	},
]

export default _nav
