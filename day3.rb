a = 1
# def foo
#   puts a
# end
# foo()

# shadowing
puts [1, 2, 3, 4, 5].map {|a| a + a}

# def mapping(x) do
#   puts [1, 2, 3, 4, 5].map {|i| i + x}
# end

# mapping(a)

x = [1, 2, 3, 4, 5].map {|i| i + 1}
# y = [1, 2, 3, 4, 5].map (def (i) i + 1 end)

a = 100
puts "I got an #{a}"


def bar(x, y, z)
  x + y + z
end
bar(1, 2, 3)

curried_bar = self.method(:bar).curry
p curried_bar
p curried_bar.(1)
p curried_bar.(1).(2)
p curried_bar.(1).(2).(3)

args = [1, 2, 3]
bar(*args)

def baz(x, *ys)
  p x
  p ys
end

baz(1)
baz(1, 2)
baz(1, 2, 3)
baz(1, 2, 3, 4)
