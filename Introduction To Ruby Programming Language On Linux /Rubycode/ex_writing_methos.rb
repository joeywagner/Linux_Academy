puts "Please input a radius to calculate the area and circumference of a circle."
user_input = gets.to_f

def area radius
  Math::PI * radius ** 2
end

def circumference radius
  2 * Math::PI * radius
end

if user_input >= 0
  puts "Area          = #{area user_input}"
  puts "Circumference = #{circumference user_input}"
else
  puts "Radius #{user_input} is invalid"
end