import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Sidebar = () => {
    const [openSections, setOpenSections] = useState({
        hotDeals: true,
        prices: true,
        colors: true,
        brands: true,
    });

    const [showMoreBrands, setShowMoreBrands] = useState(false);

    const toggleSection = (section) => {
        setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };
    const hotDeals = ["Airmax", "Nike", "Adidas", "Vans", "All Stars", "Puma"];
    const colors = ["blue", "red", "black", "yellow", "pink", "white"];
    const brands = ["Nike", "Adidas", "Vans", "All Stars"];
    const minItems = 6;

    const renderWithPlaceholders = (items) => {
        if (items.length >= minItems) return items;
        return [...items, ...Array(minItems - items.length).fill("—")];
    };

    return (
        <aside className="w-64 bg-white rounded-xl shadow-md p-4 space-y-6">
            <div>
                <button
                    onClick={() => toggleSection("hotDeals")}
                    aria-expanded={openSections.hotDeals}
                    className="flex justify-between w-full font-semibold mb-2"
                >
                    Hot Deals {openSections.hotDeals ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openSections.hotDeals && (
                    <ul className="space-y-1 text-gray-700">
                        {renderWithPlaceholders(hotDeals).map((item, i) => (
                            <li key={i} className="flex justify-between">
                                <span>{item}</span>
                                <span>{Math.floor(Math.random() * 100)}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div>
                <button
                    onClick={() => toggleSection("prices")}
                    aria-expanded={openSections.prices}
                    className="flex justify-between w-full font-semibold mb-2"
                >
                    Prices {openSections.prices ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openSections.prices && (
                    <div>
                        <p className="text-sm text-gray-500">Range: $13.99 – $25.99</p>
                        <input
                            type="range"
                            min="10"
                            max="30"
                            defaultValue="20"
                            className="w-full accent-blue-500"
                        />
                    </div>
                )}
            </div>

            <div>
                <button
                    onClick={() => toggleSection("colors")}
                    aria-expanded={openSections.colors}
                    className="flex justify-between w-full font-semibold mb-2"
                >
                    Colors {openSections.colors ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openSections.colors && (
                    <div className="flex flex-wrap gap-2">
                        {renderWithPlaceholders(colors).map((c, i) => (
                            <span
                                key={i}
                                className={`w-6 h-6 rounded-full border cursor-pointer ${c !== "—" ? `bg-${c}-500` : "bg-gray-200"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div>
                <button
                    onClick={() => toggleSection("brands")}
                    aria-expanded={openSections.brands}
                    className="flex justify-between w-full font-semibold mb-2"
                >
                    Brands {openSections.brands ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openSections.brands && (
                    <ul className="space-y-1 text-gray-700">
                        {(showMoreBrands
                            ? renderWithPlaceholders(brands)
                            : renderWithPlaceholders(brands).slice(0, minItems)
                        ).map((brand, i) => (
                            <li key={i} className="flex justify-between">
                                <span>{brand}</span>
                                <span>99</span>
                            </li>
                        ))}
                        {brands.length > minItems && (
                            <button
                                onClick={() => setShowMoreBrands(!showMoreBrands)}
                                className="text-blue-500 text-sm mt-2"
                            >
                                {showMoreBrands ? "View Less" : "View More"}
                            </button>
                        )}
                    </ul>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
