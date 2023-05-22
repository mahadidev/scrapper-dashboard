'use client';

import { ListGroup, Sidebar } from 'flowbite-react';
import React, { useState } from 'react';
import { BiBuoy } from 'react-icons/bi';
import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards,
} from 'react-icons/hi';

const Introduction = () => {
	return (
		<>
			<h2 className="text-2xl text-gray-800">Introduction</h2>
			<div className="py-2">
				<hr />
			</div>
			<p className="text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
		</>
	);
};

const SupportTimeline = () => {
	const [selectedTab, setSelectedTab] = useState<string>('intro');

	return (
		<>
			<section className="py-12 bg-white">
				<div className="container">
					<div className="flex gap-8 items-start">
						<ListGroup className="w-full max-w-xs">
							<ListGroup.Item>Introduction</ListGroup.Item>
							<ListGroup.Item>Scrape emails & phones</ListGroup.Item>
							<ListGroup.Item>Export data</ListGroup.Item>
							<ListGroup.Item>Membership</ListGroup.Item>
						</ListGroup>
						<div className="w-full px-4 bg-white rounded-md shadow-box">
							{selectedTab === 'intro' && <Introduction />}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SupportTimeline;
