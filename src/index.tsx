import Plugin from './plugins/Plugin'
import PluginFactory from './plugins/PluginFactory'
import Palette from './components/Palette'
import React, { useEffect, useState } from 'react'
import Toolbar from './components/Toolbar'
import { PluginParamValue } from './common/type'
import { EditorContext } from './components/EditorContext'
import './styles/index.less'

interface ReactImageEditorProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  plugins?: Plugin[];
  toolbar?: {
    items: string[];
  };
  src: string;
  getStage?: (stage: any) => void;
  defaultPluginName?: string;
  crossOrigin?: string;
  language?: string;
}

export default function ReactImageEditor({
  width = 700,
  height = 500,
  style = {},
  plugins = [],
  toolbar = {
    items: ['pen', 'eraser', 'arrow', 'rect', 'circle', 'mosaic', 'text', '|', 'repeal', 'download', 'crop'],
  },
  src,
  getStage,
  defaultPluginName,
  crossOrigin,
  language: languageProp,
}: ReactImageEditorProps) {
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null)
  // Convert en-US to en
  const language = (languageProp || 'en').substring(0, 2)

  const pluginFactory = new PluginFactory()
  const allPlugins = [...pluginFactory.plugins, ...plugins]
  let defaultPlugin = null
  let defaultParamValue = {}
  for (let i = 0; i < allPlugins.length; i++) {
    allPlugins[i].language = language
    if (defaultPluginName && toolbar && allPlugins[i].name === defaultPluginName) {
      defaultPlugin = allPlugins[i]

      if (defaultPlugin.defaultParamValue) {
        defaultParamValue = defaultPlugin.defaultParamValue
      }
    }
  }
  const [currentPlugin, setCurrentPlugin] = useState<Plugin | null>(defaultPlugin)
  const [paramValue, setParamValue] = useState<PluginParamValue>(defaultParamValue)

  // 生成默认 toolbarItemConfig
  const config: any = {}
  allPlugins.map(plugin => {
    if (plugin.name === 'repeal') {
      config[plugin.name] = { disable: true }
    } else {
      config[plugin.name] = { disable: false }
    }
  })

  const [toolbarItemConfig, setToolbarItemConfig] = useState(config)

  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setImageObj(image)
    }
    if (crossOrigin !== undefined) {
      image.crossOrigin = crossOrigin
    }
    image.src = src
  }, [src, crossOrigin])

  function handlePluginChange(plugin: Plugin) {
    setCurrentPlugin(plugin)
    plugin.defaultParamValue && setParamValue(plugin.defaultParamValue)
    if (!plugin.params) {
      setTimeout(() => {
        setCurrentPlugin(null)
      })
    }
  }

  function handlePluginParamValueChange(value: PluginParamValue) {
    setParamValue(value)
  }

  function updateToolbarItemConfig(config: any) {
    setToolbarItemConfig(config)
  }

  const containerStyle = {
    width: width + 'px',
    height: height + 'px',
    ...style,
  }

  return (
    <EditorContext.Provider
      value={{
        containerWidth: width,
        containerHeight: height,
        plugins: allPlugins,
        toolbar: toolbar,
        currentPlugin,
        paramValue,
        handlePluginChange,
        handlePluginParamValueChange,
        toolbarItemConfig,
        updateToolbarItemConfig,
        language,
      }}
    >
      <div className="react-img-editor" style={containerStyle}>
        {
          imageObj ? (
            <>
              <Palette
                height={height - 42}
                imageObj={imageObj}
                getStage={getStage}
              />
              <Toolbar />
            </>
          ) : null
        }
      </div>
    </EditorContext.Provider>
  )
}