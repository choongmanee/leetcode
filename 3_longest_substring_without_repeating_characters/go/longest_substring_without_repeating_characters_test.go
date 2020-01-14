package _go

import "testing"

func Test_longestSubstringWithoutRepeatingCharacters(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "0 length",
			args: args{s: ""},
			want: 0,
		},
		{
			name: "abcabcbb",
			args: args{s: "abcabcbb"},
			want: 3,
		},
		{
			name: "bbbbb",
			args: args{s: "bbbbb"},
			want: 1,
		},
		{
			name: "pwwkew",
			args: args{s: "pwwkew"},
			want: 3,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := longestSubstringWithoutRepeatingCharacters(tt.args.s); got != tt.want {
				t.Errorf("longestSubstringWithoutRepeatingCharacters() = %v, want %v", got, tt.want)
			}
		})
	}
}
