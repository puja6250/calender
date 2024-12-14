import React from "react";
import { Button, Text } from "shadcn";  // Import Shadcn components

const Header = ({ currentMonth, onPrevMonth, onNextMonth }) => {
  return (
    <div className="header flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md">
      {/* Previous Button */}
      <Button variant="outline" onClick={onPrevMonth} className="flex items-center">
        Previous
      </Button>

      {/* Current Month Text */}
      <Text className="text-xl font-semibold">{currentMonth}</Text>

      {/* Next Button */}
      <Button variant="outline" onClick={onNextMonth} className="flex items-center">
        Next
      </Button>
    </div>
  );
};

export default Header;
