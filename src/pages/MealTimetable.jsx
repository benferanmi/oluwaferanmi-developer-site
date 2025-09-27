import { useState } from 'react';
import { Clock, DollarSign, Target, ChefHat, Apple, Utensils } from 'lucide-react';

const MealTimetable = () => {
    const [activeDay, setActiveDay] = useState(0);
    const [showShoppingList, setShowShoppingList] = useState(false);

    const weeklyMeals = [
        {
            day: "Monday",
            meals: [
                {
                    time: "7:00 AM",
                    type: "Breakfast",
                    food: "Fried plantain (2 pieces) + 2 boiled eggs + Peak milk",
                    cost: "₦1,050",
                    calories: "680 cal"
                },
                {
                    time: "10:00 AM",
                    type: "Snack",
                    food: "Groundnut + dates (3 pieces)",
                    cost: "₦250",
                    calories: "320 cal",
                    optional: true
                },
                {
                    time: "1:00 PM",
                    type: "Lunch",
                    food: "Rice + beans + sardine (½ tin) + palm oil",
                    cost: "₦800",
                    calories: "750 cal"
                },
                {
                    time: "4:00 PM",
                    type: "Snack",
                    food: "Tiger nut drink + banana",
                    cost: "₦450",
                    calories: "280 cal",
                    optional: true
                },
                {
                    time: "7:00 PM",
                    type: "Dinner",
                    food: "Spaghetti jollof + fried egg + small chicken lap",
                    cost: "₦1,000",
                    calories: "820 cal"
                }
            ],
            totalCost: "₦3,550",
            totalCalories: "2,850 cal"
        },
        {
            day: "Tuesday",
            meals: [
                {
                    time: "7:00 AM",
                    type: "Breakfast",
                    food: "Bread (3 slices) + 2 fried eggs + milk",
                    cost: "₦800",
                    calories: "620 cal"
                },
                {
                    time: "10:00 AM",
                    type: "Snack",
                    food: "Coconut slices",
                    cost: "₦300",
                    calories: "250 cal",
                    optional: true
                },
                {
                    time: "1:00 PM",
                    type: "Lunch",
                    food: "Eba (garri) + vegetable soup + chicken lap + palm oil",
                    cost: "₦1,200",
                    calories: "900 cal"
                },
                {
                    time: "4:00 PM",
                    type: "Snack",
                    food: "Groundnut + apple slices",
                    cost: "₦350",
                    calories: "280 cal",
                    optional: true
                },
                {
                    time: "7:00 PM",
                    type: "Dinner",
                    food: "Beans porridge + palm oil + plantain (1 piece)",
                    cost: "₦700",
                    calories: "650 cal"
                }
            ],
            totalCost: "₦3,350",
            totalCalories: "2,700 cal"
        },
        {
            day: "Wednesday",
            meals: [
                {
                    time: "7:00 AM",
                    type: "Breakfast",
                    food: "Yam porridge + palm oil + milk",
                    cost: "₦800",
                    calories: "720 cal"
                },
                {
                    time: "10:00 AM",
                    type: "Snack",
                    food: "Dates (4 pieces) + groundnut",
                    cost: "₦300",
                    calories: "350 cal",
                    optional: true
                },
                {
                    time: "1:00 PM",
                    type: "Lunch",
                    food: "Rice + suya + vegetable stew",
                    cost: "₦1,200",
                    calories: "850 cal"
                },
                {
                    time: "4:00 PM",
                    type: "Snack",
                    food: "Avocado + tiger nut",
                    cost: "₦400",
                    calories: "320 cal",
                    optional: true
                },
                {
                    time: "7:00 PM",
                    type: "Dinner",
                    food: "Indomie (2 packs) + 2 fried eggs + sardine",
                    cost: "₦900",
                    calories: "780 cal"
                }
            ],
            totalCost: "₦3,600",
            totalCalories: "3,020 cal"
        },
        {
            day: "Thursday",
            meals: [
                {
                    time: "7:00 AM",
                    type: "Breakfast",
                    food: "Plantain porridge + milk + groundnut",
                    cost: "₦900",
                    calories: "750 cal"
                },
                {
                    time: "10:00 AM",
                    type: "Snack",
                    food: "Banana + dates (3 pieces)",
                    cost: "₦300",
                    calories: "280 cal",
                    optional: true
                },
                {
                    time: "1:00 PM",
                    type: "Lunch",
                    food: "Beans + sardine + bread + palm oil",
                    cost: "₦1,100",
                    calories: "820 cal"
                },
                {
                    time: "4:00 PM",
                    type: "Snack",
                    food: "Coconut water + flesh",
                    cost: "₦500",
                    calories: "300 cal",
                    optional: true
                },
                {
                    time: "7:00 PM",
                    type: "Dinner",
                    food: "Rice + chicken lap stew + vegetables",
                    cost: "₦1,200",
                    calories: "880 cal"
                }
            ],
            totalCost: "₦4,000",
            totalCalories: "3,030 cal"
        },
        {
            day: "Friday",
            meals: [
                {
                    time: "7:00 AM",
                    type: "Breakfast",
                    food: "Bread + 2 boiled eggs + avocado + milk",
                    cost: "₦1,000",
                    calories: "680 cal"
                },
                {
                    time: "10:00 AM",
                    type: "Snack",
                    food: "Tiger nut + apple slices",
                    cost: "₦400",
                    calories: "300 cal",
                    optional: true
                },
                {
                    time: "1:00 PM",
                    type: "Lunch",
                    food: "Garri + groundnut + milk + banana",
                    cost: "₦600",
                    calories: "550 cal"
                },
                {
                    time: "4:00 PM",
                    type: "Snack",
                    food: "Kilishi + dates",
                    cost: "₦500",
                    calories: "380 cal",
                    optional: true
                },
                {
                    time: "7:00 PM",
                    type: "Dinner",
                    food: "Spaghetti + sardine + vegetables + fried egg",
                    cost: "₦1,000",
                    calories: "750 cal"
                }
            ],
            totalCost: "₦3,500",
            totalCalories: "2,660 cal"
        },
        {
            day: "Saturday",
            meals: [
                {
                    time: "7:00 AM",
                    type: "Breakfast",
                    food: "Fried plantain (2 pieces) + 2 scrambled eggs + milk",
                    cost: "₦1,050",
                    calories: "720 cal"
                },
                {
                    time: "10:00 AM",
                    type: "Snack",
                    food: "Coconut + groundnut",
                    cost: "₦350",
                    calories: "320 cal",
                    optional: true
                },
                {
                    time: "1:00 PM",
                    type: "Lunch",
                    food: "Rice + beans + chicken lap + palm oil",
                    cost: "₦1,300",
                    calories: "920 cal"
                },
                {
                    time: "4:00 PM",
                    type: "Snack",
                    food: "Banana + tiger nut drink",
                    cost: "₦450",
                    calories: "280 cal",
                    optional: true
                },
                {
                    time: "7:00 PM",
                    type: "Dinner",
                    food: "Indomie + suya + vegetables",
                    cost: "₦800",
                    calories: "650 cal"
                }
            ],
            totalCost: "₦3,950",
            totalCalories: "2,890 cal"
        },
        {
            day: "Sunday",
            meals: [
                {
                    time: "7:00 AM",
                    type: "Breakfast",
                    food: "Yam + sardine sauce + milk",
                    cost: "₦900",
                    calories: "680 cal"
                },
                {
                    time: "10:00 AM",
                    type: "Snack",
                    food: "Dates (4 pieces) + apple",
                    cost: "₦400",
                    calories: "320 cal",
                    optional: true
                },
                {
                    time: "1:00 PM",
                    type: "Lunch",
                    food: "Beans porridge + plantain + palm oil + kilishi",
                    cost: "₦1,200",
                    calories: "950 cal"
                },
                {
                    time: "4:00 PM",
                    type: "Snack",
                    food: "Avocado + groundnut + coconut water",
                    cost: "₦500",
                    calories: "400 cal",
                    optional: true
                },
                {
                    time: "7:00 PM",
                    type: "Dinner",
                    food: "Rice + chicken lap + vegetables + fried egg",
                    cost: "₦1,300",
                    calories: "920 cal"
                }
            ],
            totalCost: "₦4,300",
            totalCalories: "3,270 cal"
        }
    ];

    const shoppingList = [
        {
            category: "Proteins & Dairy", items: [
                { name: "Eggs", quantity: "14 pieces", cost: "₦3,500" },
                { name: "Peak Milk", quantity: "4 sachets", cost: "₦1,200" },
                { name: "Sardine", quantity: "3 tins", cost: "₦1,800" },
                { name: "Chicken laps", quantity: "2 pieces", cost: "₦3,000" }
            ]
        },
        {
            category: "Fruits & Vegetables", items: [
                { name: "Plantain", quantity: "4 pieces", cost: "₦2,000" },
                { name: "Banana", quantity: "₦1,000 worth", cost: "₦1,000" },
                { name: "Dates", quantity: "12 pieces", cost: "₦400" },
                { name: "Avocado", quantity: "1-2 pieces", cost: "₦600" },
                { name: "Apple", quantity: "1 piece", cost: "₦600" },
                { name: "Coconut", quantity: "1 small", cost: "₦1,000" }
            ]
        },
        {
            category: "Snacks & Others", items: [
                { name: "Groundnut (bottle)", quantity: "1 bottle", cost: "₦2,700" },
                { name: "Tiger nut", quantity: "₦400 worth", cost: "₦400" },
                { name: "Suya", quantity: "₦1,000 worth", cost: "₦1,000" },
                { name: "Kilishi", quantity: "₦800 worth", cost: "₦800" },
                { name: "Bread", quantity: "2 loaves", cost: "₦800" }
            ]
        }
    ];

    const getMealIcon = (type) => {
        switch (type) {
            case 'Breakfast': return <ChefHat className="w-5 h-5 text-amber-500" />;
            case 'Lunch': return <Utensils className="w-5 h-5 text-blue-500" />;
            case 'Dinner': return <Utensils className="w-5 h-5 text-purple-500" />;
            default: return <Apple className="w-5 h-5 text-green-500" />;
        }
    };

    const totalWeeklyCost = weeklyMeals.reduce((sum, day) => {
        return sum + parseInt(day.totalCost.replace('₦', '').replace(',', ''));
    }, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Header */}
            <div className="bg-navy-900 shadow-xl border-b border-gray-700">
                <div className="max-w-6xl mx-auto px-6 py-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Nigerian Weight Gain Meal Plan
                        </h1>
                        <p className="text-gray-300 mt-3 text-lg">₦10,000 Weekly Budget • High Calorie • Local Foods</p>
                    </div>

                    <div className="flex justify-center mt-6 space-x-8">
                        <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                            <Target className="w-5 h-5 text-green-400" />
                            <span className="text-sm font-medium">Weight Gain Goal</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-lg">
                            <DollarSign className="w-5 h-5 text-blue-400" />
                            <span className="text-sm font-medium">₦{totalWeeklyCost.toLocaleString()}/week</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="max-w-6xl mx-auto px-6 py-6">
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {weeklyMeals.map((day, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDay(index)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeDay === index
                                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            {day.day}
                        </button>
                    ))}
                    <button
                        onClick={() => setShowShoppingList(!showShoppingList)}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${showShoppingList
                                ? 'bg-green-600 text-white shadow-lg'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                            }`}
                    >
                        Shopping List
                    </button>
                </div>

                {/* Shopping List View */}
                {showShoppingList && (
                    <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Weekly Shopping List</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {shoppingList.map((category, index) => (
                                <div key={index} className="bg-gray-900 rounded-lg p-5 border border-gray-600">
                                    <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-600 pb-2">
                                        {category.category}
                                    </h3>
                                    <div className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center">
                                                <div>
                                                    <p className="text-gray-200 font-medium">{item.name}</p>
                                                    <p className="text-gray-400 text-sm">{item.quantity}</p>
                                                </div>
                                                <span className="text-green-400 font-semibold">{item.cost}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-4 text-center">
                            <p className="text-xl font-bold text-white">
                                Total Weekly Budget: ₦{totalWeeklyCost.toLocaleString()}
                            </p>
                        </div>
                    </div>
                )}

                {/* Daily Meal Plan */}
                {!showShoppingList && (
                    <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-blue-400">
                                {weeklyMeals[activeDay].day}
                            </h2>
                            <div className="flex space-x-4">
                                <div className="bg-green-900 px-4 py-2 rounded-lg">
                                    <span className="text-green-300 font-semibold">
                                        {weeklyMeals[activeDay].totalCalories}
                                    </span>
                                </div>
                                <div className="bg-blue-900 px-4 py-2 rounded-lg">
                                    <span className="text-blue-300 font-semibold">
                                        {weeklyMeals[activeDay].totalCost}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {weeklyMeals[activeDay].meals.map((meal, index) => (
                                <div
                                    key={index}
                                    className={`bg-gray-900 rounded-lg p-5 border-l-4 transition-all duration-300 hover:shadow-lg ${meal.optional
                                            ? 'border-yellow-500 bg-opacity-50'
                                            : meal.type === 'Breakfast'
                                                ? 'border-amber-500'
                                                : meal.type === 'Lunch'
                                                    ? 'border-blue-500'
                                                    : meal.type === 'Dinner'
                                                        ? 'border-purple-500'
                                                        : 'border-green-500'
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center space-x-3">
                                            {getMealIcon(meal.type)}
                                            <div>
                                                <div className="flex items-center space-x-3">
                                                    <h3 className="text-lg font-semibold text-white">
                                                        {meal.type}
                                                        {meal.optional && (
                                                            <span className="text-yellow-400 text-sm ml-2 font-normal">
                                                                (Optional)
                                                            </span>
                                                        )}
                                                    </h3>
                                                    <div className="flex items-center space-x-1 text-gray-400">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="text-sm">{meal.time}</span>
                                                    </div>
                                                </div>
                                                <p className="text-gray-300 mt-2 leading-relaxed">
                                                    {meal.food}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-green-400 font-semibold text-lg">
                                                {meal.cost}
                                            </div>
                                            <div className="text-gray-400 text-sm">
                                                {meal.calories}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Daily Tips */}
                        <div className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-5 border border-gray-600">
                            <h4 className="text-lg font-semibold text-yellow-400 mb-3">💡 Daily Tips</h4>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                                <div>• Add palm oil generously for extra calories</div>
                                <div>• Don&apos;t skip snacks for weight gain</div>
                                <div>• Drink milk with every meal</div>
                                <div>• Eat groundnut between meals</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MealTimetable;