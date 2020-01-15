package _go

import "testing"

func Test_reverseInteger(t *testing.T) {
	type args struct {
		x int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "123",
			args: args{x: 123},
			want: 321,
		},
		{
			name: "-123",
			args: args{x: -123},
			want: -321,
		},
		{
			name: "12345678923",
			args: args{x: 12345678923},
			want: 0,
		},
		{
			name: "120",
			args: args{x: 120},
			want: 21,
		},
		{
			name: "-12345678923",
			args: args{x: 12345678923},
			want: 0,
		},
		{
			name: "0",
			args: args{x: 0},
			want: 0,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := reverseInteger(tt.args.x); got != tt.want {
				t.Errorf("reverseInteger() = %v, want %v", got, tt.want)
			}
		})
	}
}
