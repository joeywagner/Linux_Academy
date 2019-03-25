total = 0
puts "input your numbers"
while input = gets do
  if input == "\n"
    break
  end
  total = total + input.to_f
  puts "running total = #{total}"
end

puts "Total: #{total}"