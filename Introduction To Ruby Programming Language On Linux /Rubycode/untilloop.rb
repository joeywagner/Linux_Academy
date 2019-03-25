my_var = 10

until my_var > 30 do
  puts "my_var = #{my_var}"
  my_var += 1
end


integers = []
current_integer = 0
while current_integer < 10 do
  puts "Type an integer"
  integers [current_integer] = gets.to_i
  current_integer += 1
end

integers.sort.each do |this_int|
  puts this_int
end
