puts "Please type a sentence"
user_sentence = gets
number_of_words = user_sentence.split(" ").count
puts "your sentence had #{number_of_words} word#{number_of_words == 1 ? "." :"s."}"