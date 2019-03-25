array_123 = [1,2,3]

array_onrtwothree = ["one", "two", "three"]

puts "Type 1 for integers, or 'one' for strings"

user_input = gets.strip

if user_input == "1"
  puts "#{array_123[0]}, #{array_123[1]}, #{array_123[2]}"

elsif user_input == "one"
  puts "#{array_onrtwothree[0]}, #{array_onrtwothree[1]}, #{array_onrtwothree[2]}"

end