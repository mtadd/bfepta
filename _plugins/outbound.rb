module Jekyll
  class OutboundTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @href = text 
    end

    def render(context)
      "href=\"#{@href}\" onclick=\"trackOutboundLink('#{@href}')\""
    end
  end
end

Liquid::Template.register_tag('outbound', Jekyll::OutboundTag)
