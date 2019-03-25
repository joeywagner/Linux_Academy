puts "Hello! "
puts "Do you have a phone (Y/N) "
case gets
  when "Y\n"
    phone = true
  when "N\n"
    phone = false
end

puts "you have a phone. " if phone

puts "you dont have a phone " if !phone

